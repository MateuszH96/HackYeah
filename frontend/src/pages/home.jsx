import React from "react";
import exampleImage1 from '../assets/siatka.jpeg'; 
import exampleImage2 from '../assets/kosz.jpeg'; 
import exampleImage3 from '../assets/tenis.jpeg'; 
import exampleImage4 from '../assets/pilkaN.jpeg'; 

function Home(){
    return (
        <div className="events-container">
          <div className="event">
            <div className="image-circle">
              <img src={exampleImage1} alt="siatka" />
            </div>
            <div className="event-description">
              <h2>Wydarzenia z siatkowki</h2>
              <p>Zapraszam was do zagrania w siatkówkę:</p>
              <p>Data:</p>
              <p>Kategoria:</p>
              <p>Lokalizacja:</p>
              <p>Link:</p>
            </div>
          </div>
          <div className="event">
            <div className="image-circle">
              <img src={exampleImage2} alt="kosz" />
            </div>
            <div className="event-description">
              <h2>Wydarzenia z koszykówki</h2>
              <p>Zapraszam was do zagrania w koszykówkę:
              <p>Zapraszam was do zagrania w piłkę nożną:
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
              </p>
              <p>Data:</p>
              <p>Kategoria:</p>
              <p>Lokalizacja:</p>
              <p>Link:</p>
            </div>        
          </div>
          <div className="event">
            <div className="image-circle">
                <img src={exampleImage3} alt="tenis" />
            </div>
            <div className="event-description">
                <h2>Wydarzenia z tenisa</h2>
                <p>Zapraszam was do zagrania w tenisa:
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              <p>Data:</p>
              <p>Kategoria:</p>
              <p>Lokalizacja:</p>
              <p>Link:</p>
            </div>
          </div>
          <div className="event">
            <div className="image-circle">
                <img src={exampleImage4} alt="pilka" />
            </div>
            <div className="event-description">
                <h2>Wydarzenia z piłki nożnej</h2>
                <p>Zapraszam was do zagrania w piłkę nożną:
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type
                 and scrambled it to make a type specimen book.
                </p>
              <p>Data:</p>
              <p>Kategoria:</p>
              <p>Lokalizacja:</p>
              <p>Link:</p>
            </div>
          </div>
          <div className="event">
            <div className="image-circle">
                <img src={exampleImage4} alt="pilka" />
            </div>
            <div className="event-description">
                <h2>Wydarzenia z piłki nożnej</h2>
                <p>Zapraszam was do zagrania w piłkę nożną:
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type
                 and scrambled it to make a type specimen book.
                </p>
              <p>Data:</p>
              <p>Kategoria:</p>
              <p>Lokalizacja:</p>
              <p>Link:</p>
            </div>
          </div>
          <div className="event">
            <div className="image-circle">
                <img src={exampleImage3} alt="tenis" />
            </div>
            <div className="event-description">
                <h2>Wydarzenia z tenisa</h2>
                <p>Zapraszam was do zagrania w tenisa:
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              <p>Data:</p>
              <p>Kategoria:</p>
              <p>Lokalizacja:</p>
              <p>Link:</p>
            </div>
          </div>
          
          
        </div>
      );
    }

export default Home;