import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Add() {
  const [id, setid] = useState('')
  const [name, setname] = useState('')
  const [city, setcity] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')

  const base_url = 'http://localhost:8001'

  const location = useNavigate()


  const Addcontact = (e) => {
    e.preventDefault()
    
    console.log(id, name, city, email, phone);
    //api call
    const body = { id, name, city, email, phone }

    const result = axios.post(`${base_url}/add-contact`,body).then((response)=>{
      console.log(response);
      alert(response.data.message)
      location('/dashboard')


    })

      .catch((error) => {
        alert('please enter a unique id')
      })
  }


  return (
    <div>
      <div className="container text-center">

        <div className='my-5 text-center'>
          <h1>Add Contact Details</h1>
          <form className='border shadow p-5 my-5' >
            <MDBInput onChange={(e) => setid(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e) => setname(e.target.value)} label='Name' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e) => setcity(e.target.value)} label='City' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e) => setemail(e.target.value)} label='Email' id='formControlLg' type='email' size='lg' />
            <br />
            <MDBInput className='mb-5' onChange={(e) => setphone(e.target.value)} label='Phone' id='formControlLg' type='text' size='lg' />
            <br />


            <Link to={'/dashboard'}>
              <button className='btn btn-primary me-5 mb-5'>go back</button>
            </Link>
            <button onClick={(e) => Addcontact(e)} className="btn btn-success me-5 mb-5">
              Add
            </button>
          </form></div>
      </div>
    </div>
  )
}

export default Add