import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import {Button, Form,Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useauth from '../Hooks/Useauth';
import '../Details/Details.css';

const Details = () => {
    const {serviceId} = useParams();
    const [service, setservice]= useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useauth();
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setservice(data));
    },[])
    



    const handlebtn=()=>{
      window.confirm("Do you want to confirm?")
      if(true){
        document.getElementById('btn').innerText='Booked';
      }
      else{
        document.getElementById('btn').innerText='Pending';
      }
      
    }
    return (
        <div>
            <div className="d-flex">
                <div className="mt-3">
                     <img src={service.img} alt=""/>
                </div>
               
                <div className="ms-3 mt-4 text-white">
                    <h3>{service.name}</h3>
                <h5>{service.rent}</h5>
                   <p>{service.description}</p>
                   <Button id="btn" onClick={handlebtn}
                  
                   >Pending</Button>
                </div>
            </div>
            

             <Form className="w-75 mb-5 pb-5 mx-auto">
               
              
             <form className="shipping-form">

                  <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                  <input placeholder="Address" defaultValue="" {...register("address")} />
                   <input placeholder="City" defaultValue="" {...register("city")} />
                 <input placeholder="phone number" defaultValue="" {...register("phone")} />

                 <input type="submit" value="Submit" />
             </form>
            </Form>
           
            

            

        
            
        </div>
    );
};

export default Details;