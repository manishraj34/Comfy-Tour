
import "../App.css";

import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
      
      <nav class="navbar container my-3 navbar-expand-md navbar-light fixed-top bg-light shadow w-75 p-2 mb-5 bg-white">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Comfy Tour</Link>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarCollapse" >
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item ">
          
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      <button type="button" class="btn btn-success">Sign Up</button>
    </div>
  </div>
</nav>
            
      </>
    )
  }
}


// export default Navbar;