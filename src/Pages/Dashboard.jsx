import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import img from '../Assets/2.png'
import { Link } from 'react-router-dom';
import View from './View'
import Edit from './Edit';



function Dashboard() {
  const base_url = 'http://localhost:8001'
  const [allContact, setallContact] = useState([])

  const fetchData = async () => {
    const result = await axios.get(`${base_url}/get-all-contacts`)
    console.log(result.data.contacts);
    setallContact(result.data.contacts)
  }
  console.log(allContact);

const DeleteContact=async(id)=>{
  const result=await axios.delete(`${base_url}/delete-contact/${id}`)
  alert((await result).data.message)
  fetchData()
}



  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div id='body'>
      <div className="row text-center mb-4 d-flex ">
        
       <div >
       
        <Link to={'/add'}>
        <button id='add' className='btn btn-success mt-3'>Add</button>
        </Link>
        </div> 
       <h2 id='heading'>All Contacts</h2>
        
        
        
        </div>
      <div className="container ">
        {allContact.map((item) => (
          <MDBCard id='card'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <Link to={`/view/${item.id}`} element={<View />}>
                <MDBCardImage id='img' src={img} fluid alt='...' />

                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </Link>

            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle id='cardtitle' className='text-center '><h3><b>{item.name}</b></h3></MDBCardTitle>
              <div className='text-center'>
                <Link to={`/edit/${item.id}`} element={<Edit />}>
                  <buttton className='button btn btn-primary' href='#'>Edit</buttton>

                </Link>

                <buttton onClick={()=>DeleteContact(item.id)} className='button btn btn-danger' >Delete</buttton>
              </div>

            </MDBCardBody>
          </MDBCard>

        ))}

      </div>
    </div>
  )
}

export default Dashboard