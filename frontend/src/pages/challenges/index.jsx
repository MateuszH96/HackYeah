import { useEffect, useState } from "react";
import myApi from "../API/api";
import { PATH_CHALLENGES, URL_SEVER } from "../API/constant";
import { MapContainer } from 'react-leaflet'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'

function Challenge() {
    const [userLocation, setUserLocation] = useState(null);
    const [challenge, setChallenge] = useState(null);
    const [isClose, setIsClose] = useState(false);
    const [error, setError] = useState(null);

    // Function to calculate the distance using the Haversine formula
    const haversineDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    // Function to get user's location
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                error => {
                    setError('Unable to retrieve location.');
                    console.error(error);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    // Function to fetch challenge data
    const fetchChallenge = async () => {
        try {
            const url = `${URL_SEVER}${PATH_CHALLENGES}`
            const response = await myApi(url, "GET"); // Replace with your API endpoint
            const data = response[0].template
            console.log(data)
            setChallenge(data);
        } catch (err) {
            setError('Failed to fetch challenge data.');
            console.error(err);
        }
    };

    useEffect(() => {
        getUserLocation();
        fetchChallenge();
    }, []);

    useEffect(() => {
        if (userLocation && challenge) {
            const distance = haversineDistance(
                userLocation.latitude,
                userLocation.longitude,
                challenge.lat,
                challenge.long
            );
            // Assuming 5 km as the threshold distance
            setIsClose(distance <= 5);
        }
    }, [userLocation, challenge]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {isClose ? (
                <h2>You are close to the challenge!</h2>
            ) : (
                <>
                    <h2>You are not close to the challenge.</h2>
                </>
            )}
            {userLocation && (
                <div>
                    <h4>User: lat {userLocation?.latitude} long {userLocation?.longitude}</h4>
                </div>
            )}
            {challenge && (
                <div>
                    <h3>Challenge Location:</h3>
                    <p>Latitude: {challenge?.lat}</p>
                    <p>Longitude: {challenge?.long}</p>
                </div>
            )}

            <MapContainer className="map" zoom={13} scrollWheelZoom={false}>
                <TileLayer className="map"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* {userLocation && (<Marker position={[userLocation.latitude, userLocation.longitude]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>)} */}
            </MapContainer>
        </div>
    );
}

export default Challenge;