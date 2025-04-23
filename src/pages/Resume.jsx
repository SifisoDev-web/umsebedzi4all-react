import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import '../resumeCss/style.css';
import {Link } from 'react-router-dom';
 



function Resume() {
  const opt = {
    margin: 0.5,  
    filename: 'cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  // Function to generate PDF from the resume content
  const generatePDF = () => {
    const resumeElement = document.getElementById('resume');
    html2pdf().from(resumeElement).save('resume.pdf');
  };

  const [data, setData] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('resumeData'));
    if (storedData) setData(storedData);
  }, []);

  const downloadPDF = () => {
    const element = document.getElementById('resumeContent');
    html2pdf().from(element).save('umsebedzi4all-resume.pdf');
  };

  const [themeColor, setThemeColor] = useState('#2e86de');  

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setThemeColor(selectedColor);
    document.documentElement.style.setProperty('--theme-color', selectedColor);
  };

  useEffect(() => {
    // Set initial theme color on load
    document.documentElement.style.setProperty('--theme-color', themeColor);
  }, []);

  

  return (
    <div>
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

                <Link to="/interview" className="nav-link nav-item m-0 fw-bold">
                  <i className="bi bi-person-check me-2"></i>Interview Help
                </Link>

                </div>
                 
            </div>
        </nav>
        {/* Navbar End */}
      {/* Color Picker */}
      <div className="color-picker">
  <label htmlFor="colorSelect">
    <i className="fas fa-palette me-2"></i>Choose Theme Color:
  </label>
  <select
    id="colorSelect"
    onChange={handleColorChange}
    value={themeColor}
    className="custom-select"
  >
    <option value="#dc4628">Red</option>
    <option value="#2e86de">Blue</option>
    <option value="#28a745">Green</option>
    <option value="#ff9800">Orange</option>
    <option value="#6f42c1">Purple</option>
    <option value="#000000">Black</option>
    <option value="#808080">Gray</option>
  </select>
</div>

      <div style={{height:'50px',width:'100%' }}> 
      </div>
      
         <div className="download-btn float-end m-4">
          <button className="btn btn-success btn-block" onClick={generatePDF}>
            Download PDF
          </button>
         </div>

      {/* Resume Content */}
      <div id="resume" style={{ backgroundColor: themeColor }} className="cv-container">
  {/* Sidebar */}
  <div className="sidebar m-0">
    {data.profilePic && (
      <img
        id="profilePic"
        src={data.profilePic}
        alt="Profile"
        className="profile-img"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    )}

    {(data.email || data.phone || data.onlinePre || data.location) && <h1>Contact</h1>}
    {data.email && <p className="contact"><i className="fas fa-envelope"></i> {data.email}</p>}
    {data.phone && <p className="contact"><i className="fas fa-phone"></i> {data.phone}</p>}
    {data.onlinePre && <p className="contact"><i className="fas fa-globe"></i> {data.onlinePre}</p>}
    {data.location && <p className="contact"><i className="fas fa-map-marker-alt"></i> {data.location}</p>}

    {(data.nationality || data.license) && <h1 className='mt-4'>Personal Information</h1>}
    <ul>
      {data.nationality && <li className="contact">Nationality: {data.nationality}</li>}
      {data.license && <li className="contact">Drive Licence: {data.license}</li>}
      {data.idNumber && <li className="contact">ID Number:{data.idNumber}</li> }
      {data.address && <li className="contact">Address:{data.address}</li> }
      {data.birthDate && <li className="contact">birth Date:{data.birthDate}</li> }
    </ul>

    {(data.refName || data.refEmail || data.refPhone) && <h1 className='mt-1'>Reference Info</h1>}
    <ul>
      {data.refName && <li className="contact">{data.refName}</li>}
      {data.refEmail && <li className="contact">{data.refEmail}</li>}
      {data.refPhone && <li className="contact">{data.refPhone}</li>}
    </ul>
  </div>

  {/* Main Content */}
  <div className="main">
    {(data.firstName || data.lastName) && (
      <div className="section m-1">
        <h1 className='m-0' style={{ fontWeight: 'bold' }}>{data.firstName} {data.lastName}</h1>
        {data.occupation && <p>{data.occupation}</p>}
      </div>
    )}

    {data.perProfile && (
      <div className="section">
        <h2>Personal Profile</h2>
        <p>{data.perProfile}</p>
      </div>
    )}

    {(data.degree || data.schoolName || data.eduDesc || data.eduStart || data.eduEnd) && (
      <div className="section">
        <h2>Education</h2>
        {data.degree && <p><strong style={{ fontSize: '18px', color: '#2c3e50' }}>{data.degree}</strong></p>}
        {data.schoolName && <strong>Institution: <small>{data.schoolName}</small></strong>}
        {data.eduDesc && <p>{data.eduDesc}</p>}
        {(data.eduStart || data.eduEnd) && <small><strong>from </strong>{data.eduStart} <strong>to</strong> {data.eduEnd}</small>}
      </div>
    )}

    {(data.companyName || data.workJobTitle || data.workDesc || data.workStart || data.workEnd) && (
      <div className="section">
        <h2>Work Experience</h2>
        {data.companyName && <><strong>Company:</strong> <span className="info-value">{data.companyName}</span><br /></>}
        {data.workJobTitle && <><strong>Occupation:</strong> <span className="info-value">{data.workJobTitle}</span><br /></>}
        {data.workDesc && <><br /><p>{data.workDesc}</p></>}
        {(data.workStart || data.workEnd) && <small><strong>from </strong>{data.workStart}<strong> to </strong>{data.workEnd}</small>}
      </div>
    )}

    {data.skills && (
      <div className="section">
        <h2>Skills</h2>
        <div className="skills">
          {data.skills.split(',').map((skill, index) => (
            <div key={index} className="skill-box">{skill.trim()}</div>
          ))}
        </div>
      </div>
    )}

    {(data.projectName || data.projectDesc || data.projectLink || data.projectTech) && (
      <div className="section">
        <h2>Projects</h2>
        {data.projectName && <p><strong style={{ fontSize: '18px', color: '#2c3e50' }}>Personal Work: {data.projectName}</strong></p>}
        {data.projectDesc && <p>{data.projectDesc}</p>}
        {data.projectLink && <span>Project Link: <strong>{data.projectLink}</strong></span>}
        {data.projectTech && (
          <>
            <br /><span>Skills Used</span>
            <div className="skills">
              {data.projectTech.split(',').map((tech, index) => (
                <div key={index} className="skill-box">{tech.trim()}</div>
              ))}
            </div>
          </>
        )}
      </div>
    )}

    {(data.language1 || data.language2) && (
      <div className="section">
        <h2>Languages</h2>
        <ul>
          {data.language1 && <li>{data.language1} - Native</li>}
          {data.language2 && <li>{data.language2} - Intermediate</li>}
        </ul>
      </div>
    )}

    {(data.certName || data.certProvider || data.certDate || data.certLink) && (
      <div className="section">
        <h2>Certifications/Achievement</h2>
        {data.certName && <strong style={{ fontSize: '18px', color: '#2c3e50' }}>{data.certName}</strong>}<br />
        {data.certProvider && <span style={{ color: '#555' }}>Issued by: <strong>{data.certProvider}</strong></span>}<br />
        {data.certDate && <span style={{ color: '#555' }}>Date: <em>{data.certDate}</em></span>}<br />
        {data.certLink && (
          <span>
            Link: <a
              href={data.certLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1e90ff', textDecoration: 'underline' }}
            >
              View Certificate
            </a>
          </span>
        )}
      </div>
    )}
  </div>
</div>

    </div>
  );
}

export default Resume;
