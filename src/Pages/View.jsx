import React, { useEffect, useState } from 'react'
import img from '../Assets/2.png'
import { Link, useParams } from 'react-router-dom';
import {
  MDBInputGroup,
} from 'mdb-react-ui-kit';
import axios from 'axios';

function View() {
  const base_url = 'http://localhost:8001'

  //get an id from url 
  const { id } = useParams()
  console.log(id);

  const [Contactdata, setContactdata] = useState("")

  //api fetching - function
  const fetchaContact = async (id) => {
    const result = await axios.get(`${base_url}/get-contact/${id}`)
    console.log(result.data.contact);
    setContactdata(result.data.contact)
  }
  console.log(Contactdata);

  useEffect(() => {
    fetchaContact(id)
  }, [])



  return (
    <div style={{ marginLeft: '25%' }} className='text-center w-50  row'>

      <div className="container text-center  mb-5">
        <img style={{ borderRadius: '500%' }} className='border border-dark mt-5' height={'150px'} src={img} alt="" />
      </div>
      <div className="container m-5 border  text-center">


        <form>
          <h2 className='text-center  mb-5'>Contact Details : </h2>
          <MDBInputGroup className='mb-3' textBefore='Id' >
            <input className='form-control text-dark' type='text' value={Contactdata.id} />
          </MDBInputGroup><br />
          <MDBInputGroup className='mb-3 ' textBefore='Name'>
            <input className='form-control text-dark' type='text' value={Contactdata.name}/>
          </MDBInputGroup><br />
          <MDBInputGroup className='mb-3' textBefore='City'>
            <input className='form-control text-dark' type='text' value={Contactdata.city}/>
          </MDBInputGroup><br />
          <MDBInputGroup className='mb-3 ' textBefore='Email'>
            <input className='form-control text-dark' type='email' value={Contactdata.email}/>
          </MDBInputGroup><br />
          <MDBInputGroup className='mb-3' textBefore='Phone No'>
            <input className='form-control text-dark' type='tel' value={Contactdata.phone}/>
          </MDBInputGroup><br />
          <Link to={'/dashboard'}>
            <button className='btn btn-primary me-5 mb-5'>go back</button>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default View