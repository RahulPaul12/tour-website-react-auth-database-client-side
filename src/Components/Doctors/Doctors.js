import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setdoctors] = useState([]);
    useEffect(()=>{
        fetch('doctors.json')
        .then(result => result.json())
        .then(data=> setdoctors(data));
    },[])
    return (
        <div>
            
            <div className="doctor">
                {
                    doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                    >

                    </Doctor>) 
                }
            </div>

        </div>
    );
};

export default Doctors;