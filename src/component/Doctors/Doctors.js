import React, { useEffect, useState } from 'react';
import AddDoctor from '../AddDoctor/AddDoctor';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

//Doctor section
const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    const [addDoctor,setAddDoctor]=useState([]);
    useEffect(()=>{
        fetch('./bestDcotor.JSON')
        .then(res => res.json())
        // .then(data => console.log(data))
         .then(data => setDoctors(data))

    },[]);

// handle click section
    const handelBtnClick = (doctor)=>{
        const newAddDoctor = [...addDoctor,doctor]
        setAddDoctor(newAddDoctor);
    }
    return (
        <div className="all-section">
           
            <div className="doctor-section">
             
                
                {
                    doctors.map(doctor=><Doctor 
                        handelBtnClick={handelBtnClick}
                        // key={doctor.key}
                        doctor={doctor}></Doctor>)
                
                }
                

            </div>
            <div className = "add-budgets-section">
               <AddDoctor addDoctor={addDoctor}></AddDoctor>

               
            </div>
        </div>
    );
};

export default Doctors;