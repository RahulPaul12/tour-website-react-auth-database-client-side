import React from 'react';
import { Link } from 'react-router-dom';


const Hotels = ({hotels}) => {
    const {_id,img, ac , bed, rent} = hotels;
    return (
        <div>
        
            <h5>Ac{ac}</h5>
           
             
        </div>
    );
};

export default Hotels;