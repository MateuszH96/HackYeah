import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myApi from "./API/api"
import { URL_SEVER, PATH_CATEGORY, PATH_MEETING } from "./API/constant";
function CreateEvent() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    category: "1",
    location: "",
    url_location: ""
  });
  const navigate = useNavigate()
  const [category, setCategory] = useState([{id:1, name:"Opcja1"},{id:2, name:"Opcja2"},{id:3, name:"Opcja3"}]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = URL_SEVER + PATH_CATEGORY;
        const response  = await myApi(url, "GET");
        const categories = response.map(item => ({
          id: item.id,
          name: item.name
        }));
        setCategory(categories);
      }catch(err){
        console.error("Error during fetch data", err)
      }
    }
    fetchData()
  },[]) 
  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    console.log(eventData); 
    const location = {
      name: eventData.location,
      google_url: eventData.url_location
    }
    const date = new Date(eventData.date); 
    const formattedDate = date.toISOString(); 
    const data = {
      title: eventData.title,
      description: eventData.description,
      date: formattedDate,
      location: location,
      categories: [parseInt(eventData.category)]
    };
    try{
      const url = URL_SEVER + PATH_MEETING;
      const response = await myApi(url, "POST", data);
      console.log("returned state:", response);
      if (response.status === 201){
        navigate("/events")
      }
    }catch(error){
      console.error("Error during create event:",error)
    }

  };

  return (
    <div className="page">
      <form className = "form-container" action="POST">
        <label className="form-label">Tytuł</label>
        
        <input
          className="form-input"
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
        />
        <label className="form-label">Opis wydarzenia</label>
        <textarea
        className="event_text"
          rows="10"
          cols="100"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          placeholder="Wpisz tutaj opis wydarzenia"
        />
        <label className="form-label">Data wydarzenia</label>
        <input
          className="date_input"
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
        />        
        <label className="form-label">Kategoria</label>
        <select
          className="category_select"
          name="category"
          value={eventData.category}
          onChange={handleChange}
        >
          {category.map((cat, index) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <label className="form-label">Lokalizacja</label>
        <input
          className="location_input"
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
        />
        <label className="form-label">Link</label>
        <input
          className="link_input"
          type="text"
          name="url_location"
          value={eventData.url_location}
          onChange={handleChange}
        />
        <button className="button" onClick={handleOnClick}>Kliknij</button>
      </form>
    </div>
  );
}

export default CreateEvent;
