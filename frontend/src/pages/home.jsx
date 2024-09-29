import React, { useContext } from "react";
import exampleImage7 from '../assets/pierwsza.jpeg'; 
import exampleImage8 from '../assets/wybierz.jpeg'; 
import exampleImage9 from '../assets/zapisz.jpeg'; 
import exampleImage10 from '../assets/zatwierdz.jpeg'; 
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
function Home(){
    const navigate = useNavigate();
    const { auth, logout } = useContext(AuthContext); 
    const isAuthenticated = !!auth; 

  
    const handleClickLink = (page) => {
      navigate(page)
    }

    return (
        <div>
            <div className="first-cont">
            <div className="photo">
                <img src={exampleImage7} alt="firstPhoto"/>
            </div>
            <p className="text-overlay">WellYEAH</p>           

            </div>  
            <button className="custom-button" onClick={() => handleClickLink("/events")}>Wybierz wydarzenie</button>
            <div>
            <div className="opis-strony">
                <p>Mamy świadomość, że w XXIw coraz bardziej stajemy się samotni oraz otyłość staje się realnym problemem z którym chcielibyśmy walczyć, dlatego my proponujemy idealne rozwiązanie! 

                Czy miałeś kiedyś taką sytuację, że chciałeś się podzielić swoją pasją z innymi, ale 
                Twoi przyjaciele mają już dzieci, biorą ślub, bądź są zanurzeni w swojej codzienności,
                 albo może sam jesteś pochłonięty rutyną i chciałbyś coś zmienić, 
                i przejść na aktywną stronę mocy? A może szukasz nowych znajomości albo romantycznej
                relacji, która będzie mieć podobną pasję do Ciebie? 
                Oto nasza aplikacja, która przychodzi wam z pomocą, 
                żebyście w świecie internetu i pogłębiającej się samotności, 
                mogli wyjść znowu na światło dzienne i poznać wiele wspaniałych nowych znajomości, dzieląc z nimi swoje pasję i zainteresowania.

            </p>
        
            </div>
            <div className="szukajka">
                <div className="step">
                    <img src={exampleImage8} alt="szukaj"/>
                    <p>Znajdź wydarzenie, które Cię interesuje</p>
                </div>
                <div className="line"></div> {/* Linia pomiędzy */}
                <div className="step">
                    <img src={exampleImage9} alt="zapisz sie"/>
                    <p>Zapisz się</p>
                </div>
                <div className="line"></div> {/* Linia pomiędzy */}
                <div className="step">
                    <img src={exampleImage10} alt="zatwierdz"/>
                    <p>Weź udział</p>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        </div>
      );
    }

export default Home;