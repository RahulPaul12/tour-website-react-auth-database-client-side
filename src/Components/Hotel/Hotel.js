import React, { useEffect, useState } from 'react';
import Hotels from '../Hotels/Hotels';
const Hotel = () => {

    const [hotels, sethotels] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/hotels')
       .then(result => result.json())
       .then(data => sethotels(data));
    },[])
  
    return (
        <div className="">
            <h1 className="text-center mt-3">Our Hotels</h1>
            <div className="service">
                {
                    hotels.map(hotel => <Hotels
                        key={hotel.id}
                        hotels={hotel}
                        ></Hotels>)
                }
            </div>
            
        </div>

    );
            
};

export default Hotel;