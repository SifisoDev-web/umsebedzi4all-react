import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      {/* 404 Start */}
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">
            Oops! Something went wrong. Let’s go back home and try again!
            </p>
            <Link className="btn btn-primary py-3 px-5 rounded-3" to="/">Go Back To Home</Link>
          </div>
        </div>
      </div>
      {/* 404 End */}
    </div>
  );
}

export default Error;
