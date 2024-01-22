import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <MDBNavbar className='bg-info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light d-flex'>
            <Link to={'/'}>
              <h2 style={{ color: '#05396B' }} ><b>               <i class="fa-solid fa-phone fa-shake fa-xl  me-2 " style={{ color: '#05396B' }} ></i>
Contact</b></h2>
            </Link>

          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header