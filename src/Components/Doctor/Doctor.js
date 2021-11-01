import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {id,image, name, gender, phone ,Monday, Tuesday, Friday} = doctor;
    return (
        <div className="pt-5">

            <img 
            style={{
                width: '200px',
                height: '100px'
            }}
            src={image} alt="" />
            
            <h1>{name}</h1>
            <h3>{gender}</h3>
            <h5>Phone{phone}</h5>
            <h6>Monday:{Monday}</h6>
            <h6>Tuesday:{Tuesday}</h6>
            <h6>Friday:{Friday}</h6>

            <Link to={`/hotels/${id}`}>
             <button className="btn btn-warning">Book Now</button>
             </Link>

            
             
             
             
        </div>
    );
};

export default Doctor;