import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import '../Addservice/Addservice.css';

const Addservice = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    
        
        axios.post('http://localhost:5000/services', data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
            }
        })
    }

    
    return (
        <div className="addservice">
            <h2>Add service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description")} placeholder="description"/>
      <input type="number" {...register("price")} placeholder="price" />
      <input  {...register("img")} placeholder="image url" />
      <input type="submit" value="Submit" className="btn btn-primary"/>
    </form>
        </div>
    );
};

export default Addservice;