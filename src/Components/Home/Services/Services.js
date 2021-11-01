import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(result => result.json())
            .then(data => setservices(data));
    }, [])
    return (
        <div className="">
            <h1 className="text-center mt-3">Tours</h1>
            <div className="service">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            
        </div>

    );
};

export default Services;