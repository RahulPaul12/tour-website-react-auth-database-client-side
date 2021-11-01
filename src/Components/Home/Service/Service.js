import React from 'react';
import { Link } from 'react-router-dom';

import './service.css';

const Service = ({service}) => {
    const {_id,img, name , description, rent} = service;
    return (
        <div className="services p-3 m-3 rounded-bottom">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{rent}$</h5>
            <p>{description}</p>
            <Link to={`/details/${_id}`}>
               <button className="btn btn-primary">Book Now</button>
             </Link>
             
        </div>
    );
};

export default Service;