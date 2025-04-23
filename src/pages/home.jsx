import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JobList from '../components/JobList';


function Home() {

   

    // for seaching job

    const [query, setQuery] = useState('');
    const [jobListings, setJobListings] = useState([]);
    const [loading, setLoading] = useState(false);
  
    // Function to handle the search
    const handleSearch = async () => {
      if (!query.trim()) return;   
  
      setLoading(true);
  
      try {
         
        const response = await axios.get('https://api.adzuna.com/v1/api/jobs/za/search/1', {
          params: {
            app_id: '68100a47',   
            app_key: '8100b76039d587d1e6389dec9abc509f',   
            where: 'South Africa',   
            results_per_page: 30,   
            what: query,   
          },
        });
  
        setJobListings(response.data.results);  // Set the job listings in state
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
  
      setLoading(false);
    };
    // for catagory
    
  return (
    
       <div className="container-xxl bg-white  overflow-hidden p-0">
       
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
                    <a href="#" className="nav-item nav-link m-0 fw-bold">Home</a>
                    <a href="#about" className="nav-item nav-link m-0 fw-bold ">About</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle fw-bold m-0" data-bs-toggle="dropdown">Jobs</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="#job_list" className="dropdown-item fw-bold">Job List</a>
                            <Link to="/location" className="dropdown-item fw-bold">Job Location</Link>
                        </div>
                    </div>
                     
                    <Link to="/interview" className="nav-link nav-item m-0  fw-bold" >Interview Help</Link>
                     
                    <a href="#footer" className="nav-item nav-link m-0 fw-bold">Contact</a>
                </div>
                <Link to="/formResume" className="btn btn-primary m-2 rounded-3  py-4 px-lg-5 fw-bold   ">Free Resume Builder<i className="fa fa-arrow-right ms-3"></i></Link>
        
            </div>
        </nav>
        {/* Navbar End */}


        {/* Carousel Start */}
        <div id="Home" className="container-fluid p-0  ">
            <div className="owl-carousel header-carousel position-relative  ">
                <div className="owl-carousel-item position-relative m-3  ">
                    <img className="img-fluid m-3" src="assets/img/career-progress.svg" alt=""/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: '#1b57fd6c'}}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-3   animated slideInDown mb-4 fw-bold  " style={{color: 'rgb(236, 224, 208)'}}  >The Gateway to Your Dream Job</h1>
                                    <p className="fs-5 fw-medium   mb-4 pb-2 " style={{color: 'rgb(37, 30, 77)'}}>At umsebedzi4all, we believe everyone deserves a job that matches their passion. Start your journey today and find the perfect opportunity that helps you grow and succeed!</p>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  
            </div>
        </div>
        {/* Carousel End */}


        {/* Search Start */}
        <div id="catagory" className="container-fluid bg-primary wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
      <div className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="">
                <input
                  type="text"
                  className="form-control border-0 rounded-3 "
                  placeholder="Search by job title, skill or company"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}   
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-dark border-0 w-100 rounded-3 "
              onClick={handleSearch}   
            >
              Look Up
            </button>
          </div>
        </div>
      </div>

      {/* Display the job listings */}
      
    </div>
    <div className="container mt-4 m-3 p-3">
        {loading && <p>Loading...</p>}
        {jobListings.length > 0 && (
          <div className="row">
            {jobListings.map((job) => (
              <div className=" m-2  " key={job.id}>
                <div className="card">
                  <img src={job.company?.logo || 'default-logo.png'} className="card-img-top" alt="Company Logo" />
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">{job.location?.display_name}</p>
                    
                    <Link
                          to="/jobDetail"
                          state={{ job }}    
                          className="btn btn-primary rounded-3"
                        >
                          View job info
                    </Link>
                  </div>
                   <small className="text-truncate m-2">
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      Published On:{' '}
                      {new Date(job.created).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </small>
                </div>
              </div>
            ))}
          </div>
        )}
        {jobListings.length === 0 && !loading }
      </div>
        
        {/* Search End */}

        {/* About Start */}
        <div id="about" className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4 fw-bold">We Connect You to the Right Jobs Across Mzansi - Find Career Opportunities in South Africa</h1>
                        <p className="mb-4">At umsebedzi4all, we make it easy to find job opportunities that match your skills and dreams. Whether you're starting out or looking for your next big move, we're here to help you grow.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Jobs in all industries, across South Africa</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Free CV builder and application help</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Smart tools to match you with the right opportunities</p>
                         
                    </div>

                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                         
                        <div className="col-6 text-start d-none d-md-block">
                            <img className="img-fluid w-150" src="assets/img/undraw_team-page_q5am.png"/>
                        </div>
                         
                     
                </div>
                    
                </div>
            </div>
        </div>
        {/* About End */}
 
 
        <JobList />
          
<div style={{backgroundColor: 'rgba(60, 69, 90, 0.466)'}} className="testimonial-item m-5 m-3 rounded-3 p-4">
    <i className="fa fa-quote-left fa-2x text-white mb-3"></i>
    <p className="text-white">We value your feedback! Share your experience with us and help others make an informed decision.</p>
    <div className="d-flex align-items-center">
        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/pic-profile.svg" style={{width: '70px', height: '70px'}}/>
        <div className="ps-3">
            <h5 className="mb-1 text-dark">Your Name</h5>
            <small className="text-white">Your Profession</small>
        </div>
    </div>
</div>

 
        {/* Back to Top */}
        <a href="#" className="btn btn-lg rounded-circle btn-primary btn-lg-square back-to-top d-flex justify-content-center align-items-center">
          <i className="bi bi-arrow-up"></i>
        </a>

    </div>
     
  );
}

export default Home;