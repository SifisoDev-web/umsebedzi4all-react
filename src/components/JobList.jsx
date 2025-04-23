import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.adzuna.com/v1/api/jobs/za/search/1?app_id=68100a47&app_key=8100b76039d587d1e6389dec9abc509f&where=South+Africa&results_per_page=30")
      .then(response => response.json())
      .then(data => {
        setJobs(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div id="job_list" className="container-xxl d-flex py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
        <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              {loading ? (
                <p>Loading jobs...</p>
              ) : (
                jobs.map((job, index) => (
                  <div key={index} style={{ background: '#DBDBDB' }} className="job-item rounded-3 p-4 mb-4">
                    <div className="row g-4">
                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                        <img
                          className="flex-shrink-0 d-none d-md-block img-fluid rounded-circle"
                          src="assets/img/jobIcon.svg"
                          alt={job.company.display_name}
                          style={{ width: '80px', height: '80px' }}
                        />
                        <div className="text-start ps-4 w-100">
                          <h5 className="mb-3">{job.title}</h5>
                          <div className="d-flex flex-wrap gap-3">
                            <div className="d-flex align-items-center">
                              <i className="fa fa-map-marker-alt text-primary me-2"></i>
                              <span>{job.location.display_name}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <i className="far fa-clock text-primary me-2"></i>
                              <span>{job.contract_type}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <i className="far fa-money-bill-alt text-primary me-2"></i>
                              <span>
                                {job.salary_min && job.salary_max
                                  ? `${job.salary_min} - ${job.salary_max}`
                                  : 'Not disclosed'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div className="d-flex mb-3">
                          <Link
                            to="/jobDetail"
                            state={{ job }}
                            className="btn btn-primary rounded-3"
                          >
                            View job info
                          </Link>
                        </div>
                        <small className="text-truncate">
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          Published On:{' '}
                          {new Date(job.created).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </small>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
