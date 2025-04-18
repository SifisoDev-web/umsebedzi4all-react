import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function JobDetail() {
  const { state } = useLocation();
  const job = state?.job;

  if (!job) {
    return <div>Job data not available.</div>;
  }

  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* Navbar Start */}
                    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top  ">
                          <a href="#" className="navbar-brand d-flex align-items-center text-center py-0 px-4  ">
                              <img src="assets/img/logo (1).png" alt="Umsebedzi4all Logo"   height="80"/>
                          </a>
                          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                              <span className="navbar-toggler-icon"></span>
                          </button>
                          <div className="collapse navbar-collapse " id="navbarCollapse">
                              <div className="navbar-nav ms-auto   ">
                                  <Link to="/" className="nav-item nav-link fw-bold">
                                  <i className="bi bi-house-door me-2"></i>Home
                                  </Link>
                              </div>
                              <Link to="/formResume" className="btn btn-primary m-2 rounded-3  py-4 px-lg-5 fw-bold   ">Free Resume Builder<i className="fa fa-arrow-right ms-3"></i></Link>     
                          </div>
                      </nav>
                      {/* Navbar End */}

        {/* Job Detail Start */}
        <div className="container-xxl py-5 wow  fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row gy-5 gx-4">
              <div className="col-lg-8 ">
                <div className="d-flex align-items-center mb-5  ">
                  <img className="flex-shrink-0 img-fluid  rounded" src="assets/img/jobIcon.svg" alt="" style={{ width: '80px', height: '80px' }} />
                  <div className="text-start  ps-4">
                    <h3 className="mb-3">{job.title}</h3>
                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{job.location?.display_name}</span>
                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{job.contract_time || 'Full Time'}</span>
                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{job.salary_min && job.salary_max ? `${job.salary_min} - ${job.salary_max}` : 'Not disclosed'}</span>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="mb-3">Job description</h4>
                  <p>{job.description || 'No description available.'}</p>

                  <h4 className="mb-3">Qualifications</h4>
                  <p>{job.contract_type 
                      ? `Contract Type: ${job.contract_type}` 
                      : 'Qualifications not specified.'}
                   </p>
                       <ul className="list-unstyled">
                      {job.skills?.map((skill, index) => (
                      <li key={index}>
                      <i className="fa fa-angle-right text-primary me-2"></i>{skill}
                      </li>
                          )) || (
                        <li><i className="fa fa-angle-right text-primary me-2"></i>No specific skills listed</li>
                       )}
                 </ul>
                </div>
              </div>

              
               


              <div className="">
                <div style={{background:'#DBDBDB'}} className="  rounded-3 p-5 mb-4 wow slideInUp border" data-wow-delay="0.1s">
                  <h4 className="mb-4">Job Summary</h4>
                  <p><i className="fa fa-angle-right text-primary me-2"></i>Published On:  {new Date(job.created).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p><i className="fa fa-angle-right text-primary me-2"></i>Contract: {job.contract_time}</p>
                  <p><i className="fa fa-angle-right text-primary me-2"></i>Category: {job.category?.label}</p>
                 
               <h4 className="mb-4">Company Detail</h4>
              <p><strong>Company:</strong> {job.company?.display_name || 'N/A'}</p>
              <p><strong>Job Title:</strong> {job.title || 'N/A'}</p>
              <p><strong>Location:</strong> {job.location?.display_name || 'N/A'}</p>
              <p><strong>Contract Type:</strong> {job.contract_time || 'N/A'}</p>
              <p><strong>Category:</strong> {job.category?.label || 'N/A'}</p>
              <p><strong>Salary :</strong> 
                {job.salary_min && job.salary_max 
                  ? `${job.salary_min} - ${job.salary_max}` 
                  : 'Not specified'}
              </p>
              <p><strong>Published On:</strong>  {new Date(job.created).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Job ID:</strong> {job.id || 'N/A'}</p>
                          {job.redirect_url && (
                <a 
                href={job.redirect_url} 
                className="btn btn-primary rounded-3 mt-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Finish Application on Adzuna
              </a>
              
              )}
            </div>

              </div>
            </div>
            
          </div>
        </div>
        {/* Job Detail End */}
      </div>
    </>
  );
}

export default JobDetail;
