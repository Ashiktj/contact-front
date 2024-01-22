import React from 'react'
import gif from '../Assets/1.png'
import Dashboard from '../Pages/Dashboard'
import { Link } from "react-router-dom"



function Home() {
  return (
    <div  >
      <div style={{ height: '650px' }} className="row my-5  py-5">
        <div className="col-1"></div>

        <div className="col-5 mt-6">
          <h1 className='text-center m-5 ' style={{ color: '#05396B' }}><b>Contact Manager</b></h1>
          <p className='mx-5 container ' style={{ color: '#05396B', textAlign: 'justify' }}>A contact manager is a software program that enables users
            to easily store and find contact information, such as names,
            addresses, and telephone numbers. They are contact-centric
            databases that provide a fully integrated approach to
            tracking all information and communication activities
            linked to contacts. Simple ones for personal use are
            included in most smartphones. The main reference standard
            for contact data and metadata, semantic and interchange, is
            the vCard.
          </p>
          <div className='text-center'>
          <Link to='/dashboard' element={<Dashboard />}>             
           <button style={{ backgroundColor: '#05396B',borderRadius:'20px' }} className='btn  shadow text-white text-center m-5 '>Get Started</button>
          </Link>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-3 mx-5"><img width={'500px'} src={gif} alt="" /></div>
      </div>
    </div>
  )
}

export default Home