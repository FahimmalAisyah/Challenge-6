import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export class NavBar extends PureComponent {
  render() {
    return (
        <div className='navbar navbar-expand-lg'>
                <div className="container-lg d-flex align-items-center py-2">
        <a className="navbar-brand" href="#">
          <img src="./src/assets/ezyzip/logo1.png" alt="Logo" width="100" height="34" className="d-inline-block align-text-top"></img>
      </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-2">
              <a className="nav-link" aria-current="page" href="#">Our Service</a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link" href="#">Why Us</a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link" href="#">Testimonial</a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <button className="btn-regis nav-link text-white">Register</button>
            </li>
          </ul>
        </div>

        </div>
        </div>
        
    )
  }
}

export default NavBar