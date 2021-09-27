import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Doctor.css';

const Doctor = (props) => {
    const {img,name,id,speciality,salary,contac,email} = props.doctor;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className ="doctor-card">
            <img className='img-doctor' src={img} alt="image"/>
           
            <h4>Name: {name}</h4>
            <h4>id: {id}</h4>
            <h4>speciality: {speciality}</h4>
            <h4>salary: {salary}</h4>
            <h4>contac: {contac}</h4>
            <h4>email: {email}</h4>
            <i class="fab fa-facebook"></i><i class="fab fa-twitter"></i><i class="fab fa-instagram"></i>
            
            <button onClick={()=>props.handelBtnClick(props.doctor)} className="btn-doctor">{element}add doctor</button>
  

        </div>
    );
};

export default Doctor;