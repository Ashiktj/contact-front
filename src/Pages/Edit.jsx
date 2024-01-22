import img from '../Assets/2.png'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

function Edit() {
  const [userid, setid] = useState({})
  const [username, setname] = useState({})
  const [usercity, setcity] = useState({})
  const [useremail, setemail] = useState({})
  const [userphone, setphone] = useState({})

  const { id } = useParams()
  console.log(id);

  const base_url = 'http://localhost:8001'

  const fetchContact = async(id) => {
    const result = await axios.get(`${base_url}/get-contact/${id}`)
    console.log(result.data.contact);
    setid(result.data.contact.id)
    setname(result.data.contact.name)
    setcity(result.data.contact.city)
    setemail(result.data.contact.email)
    setphone(result.data.contact.phone)
  }

  useEffect(() => {
    fetchContact(id)
  }, [])

  const location = useNavigate()
  //update an employee function call 
  const updatecontact = async (e) => {
    e.preventDefault()
    const body = {
      id: userid,
      name: username,
      city: usercity,
      email: useremail,
      phone: userphone
    }
    const result = await axios.post(`${base_url}/update-contact/${id}`, body)
    console.log(result);
    alert(result.data.message)
    location('/dashboard')




  }

  return (
    <div style={{ marginLeft: '25%' }} className='text-center w-50  row'>

      <div className="container text-center  mb-5">
        <img style={{ borderRadius: '500%' }} className='border border-dark mt-5' height={'150px'} src={img} alt="" />
      </div>
      <div className="container m-5 border  text-center">


        <form onSubmit={(e) => updatecontact(e)}>
          <h2 className='text-center  mb-5'>Update Contact Details</h2>
          <MDBInput onChange={(e)=>setid(e.target.value)} value={userid} label='Id' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setname(e.target.value)} value={username} label='NAME' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setcity(e.target.value)} value={usercity} label='ADDRESS' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setphone(e.target.value)} value={userphone} label='PHONE' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setemail(e.target.value)} value={useremail} label='EMAIL' id='formControlLg' type='text' size='lg' />
      <br />

          <Link to={'/dashboard'}>
            <button className='btn btn-primary me-5 mb-5'>go back</button>
          </Link>
          <button onClick={(e) => updatecontact(e)} className='btn btn-primary mb-5'>Update</button>

        </form>
      </div>
    </div>
  )
}

export default Edit