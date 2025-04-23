import React from 'react'

const Footer = () => {
  return (
    <div> 
        {/* Footer Start */}
        <div id="footer" className="container-fluid bg-primary text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Usembedzi4all</h5>
                        <a className="btn btn-link text-white-50" href="">About Us</a>
                        <a className="btn btn-link text-white-50" href="">Contact Us</a>
                        <a className="btn btn-link text-white-50" href="">Our Services</a>
                        <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Contact</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Mpumalanga, South Africa</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light rounded-circle btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light rounded-circle btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light rounded-circle btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light rounded-circle btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                     
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Usembedzi4all</a>, All Rights Reserved.

							
							 
							Designed & Developed by <a className="border-bottom" href="https://sifisowiseman.onrender.com/">Sifiso Wiseman Nkosi</a>

                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                              
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End */}
    </div>
  )
}

export default Footer

