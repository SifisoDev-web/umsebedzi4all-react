import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Interview() {
  const [content, setContent] = useState(`
    <h2>Welcome to the Interview Guide!</h2>
    <p>Click on the topics above to learn more.</p>
  `);

  const loadContent = (topic) => {
    let contentHTML = '';
    switch (topic) {
      case 'interview-questions':
        contentHTML = `
          <h2>Common Interview Questions</h2>
          <ul>
            <li>Tell me about yourself.</li>
            <li>Why do you want to work here?</li>
            <li>What are your strengths and weaknesses?</li>
          </ul>`;
        break;
      case 'interview-tips':
        contentHTML = `
          <h2>Interview Tips</h2>
          <ul>
            <li>Do your research about the company.</li>
            <li>Practice your answers to common questions.</li>
            <li>Dress appropriately for the interview.</li>
          </ul>`;
        break;
      case 'mock-interviews':
        contentHTML = `
          <h2>Mock Interviews</h2>
          <p>Mock interviews simulate real interview conditions. You can practice with friends or use online platforms to get feedback.</p>`;
        break;
      default:
        contentHTML = `
          <h2>Welcome to the Interview Guide!</h2>
          <p>Click on the topics above to learn more.</p>`;
    }
    setContent(contentHTML);
  };

  return (
    <div style={{ backgroundColor: 'rgba(147, 172, 211, 0.548)' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
          <img src="assets/img/logo (1).png" alt="Umsebedzi4all Logo" height="80" />
        </a>

        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link">
                    <i className="fas fa-home"  ></i>
                          Home
          </Link>
             
          </div>
          <a href="#" className="btn btn-primary m-2 rounded-3 py-4 px-lg-5 d-none d-lg-block">
            Free Resume Builder<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
      {/* Navbar End */}

      <div className="container py-5">
        <h1 className="text-center text-primary fw-bold display-4 mb-4">Interview Guide</h1>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Interview Topics
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => loadContent('interview-questions')}>Common Interview Questions</button></li>
            <li><button className="dropdown-item" onClick={() => loadContent('interview-tips')}>Interview Tips</button></li>
            <li><button className="dropdown-item" onClick={() => loadContent('mock-interviews')}>Mock Interviews</button></li>
          </ul>
        </div>

        <div className="row mt-4">
          {/* Content Area */}
          <div className="col-md-8" id="contentArea">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <p className="text-muted mt-3">
              <em>Information provided by interview expert <strong>John Doe</strong>.</em>
            </p>
          </div>

          {/* Image */}
          <div className="col-md-4 image-container mb-4">
            <img src="assets/img/interview.png" alt="Interview Guide" className="img-fluid rounded float-end" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
