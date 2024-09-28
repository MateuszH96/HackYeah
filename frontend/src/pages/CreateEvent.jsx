import { useEffect, useState } from "react";
import myApi from "./API/api"
import { URL_SEVER, PATH_CATEGORY } from "./API/constant";
function CreateEvent() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    location: "",
    url_location: ""
  });
  
  const [category, setCategory] = useState(["Opcja1", "Opcja2", "Opcja3"]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = URL_SEVER + PATH_CATEGORY;
        console.log(url)
        const response  = await myApi(url, "GET");
        console.log(response);
        const categories = response.map(item => item.name);
        setCategory(categories);
      }catch(err){
        console.error("Error during fetch data", err)
      }
    }
    fetchData()
    //const response = await myApi(URL_SEVER,"GET")
  },[]) 
  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(eventData); 
  };

  return (
    <>
      <form action="POST">
        <label>Tytuł</label>
        <br />
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
        />
        <br />
        <label>Opis wydarzenia</label>
        <br />
        <textarea
          rows="10"
          cols="100"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          placeholder="Wpisz tutaj opis wydarzenia"
        />
        <br />
        <label>Data wydarzenia</label>
        <br />
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
        />
        <br />
        <label>Kategoria</label>
        <br />
        <select
          name="category"
          value={eventData.category}
          onChange={handleChange}
        >
          {category.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <br />
        <label>Lokalizacja</label>
        <br />
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
        />
        <br />
        <label>Link</label>
        <br />
        <input
          type="text"
          name="url_location"
          value={eventData.url_location}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleOnClick}>Kliknij</button>
      </form>
    </>
  );
}

export default CreateEvent;
