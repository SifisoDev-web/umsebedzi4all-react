import React from 'react';
import { Link } from 'react-router-dom';

function Location() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
            <img src="assets/img/logo (1).png" alt="Umsebedzi4all Logo"   height="80"/>
        </a>
        
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link">Home</Link>
                  
                <Link to="/interview" className="nav-link nav-item " >Interview Help</Link>
                     
            </div>
            <a href="#" className="btn btn-primary m-2 rounded-3  py-4 px-lg-5 d-none d-lg-block ">Free Resume Builder<i className="fa fa-arrow-right ms-3"></i></a>
    
        </div>
    </nav>
    {/* Navbar End */}
  <div className="container py-5">
    <div className="border rounded p-4 shadow-sm">
        <h1 className="text-center text-primary fw-bold display-4 mb-4">Jobs on the Map</h1>

      {/* Map Display Area */}
      <div id="jobMap" className="w-100 border border-primary rounded"></div>
    </div>
  </div>

    </div>
  );
}

export default Location;