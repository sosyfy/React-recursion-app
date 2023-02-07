import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Info() {
    const [userData , setUserData ] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        let data = localStorage.getItem('userData')
        data = JSON.parse(data)
        console.log(data)
        setUserData(data)
    },[])

  return (
    <div className="main">
        <div className='section-wrapper'>
          <h1 className="heading"> Welcome { userData.name}</h1>
          <div className="name-field">
            <span>Full Name </span>
            <span className='list-item'>{ userData.name} </span>

          </div>
          <div className="sectors-field-wrapper">
            <h1>Sectors selected</h1>
            <div className="sectors-field-details">
            { userData?.sectors?.map((option, index ) => (
              <h1 key={index} className='list-item'> {index + 1 }. {option.label}</h1>
            ))}
            </div>
          </div>
          

          <button type="button" className='submit-button' onClick={()=> navigate('/')}>Back To Edit Details </button>
        </div>
      </div>
  )
}

export default Info