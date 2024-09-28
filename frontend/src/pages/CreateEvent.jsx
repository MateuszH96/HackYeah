import { useState } from "react";

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
            <option key={index} value={cat}>
              {cat}
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
