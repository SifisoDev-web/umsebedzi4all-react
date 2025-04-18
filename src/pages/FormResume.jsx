 
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FormResume() {
  useEffect(() => {
    window.nextStep = function (current) {
      const currentStep = document.getElementById(`step${current}`);
      const inputs = currentStep.querySelectorAll('input, textarea');
      let valid = true;

      inputs.forEach(input => {
        const isOptional = input.getAttribute('data-optional') === "true";
        if (!isOptional && !input.value.trim()) {
          input.classList.add('is-invalid');
          valid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      });

      if (valid) {
        currentStep.classList.remove('active');
        document.getElementById(`step${current + 1}`).classList.add('active');
      }
    };

    window.prevStep = function (current) {
      document.getElementById(`step${current + 1}`).classList.remove('active');
      document.getElementById(`step${current}`).classList.add('active');
    };
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    lastName: '',
    perProfile: '',
    city: '',
    country: '',
    address: '',
    zip: '',
    idNumber: '',
    birthDate: '',
    nationality: '',
    license: '',
    degree: '',
    schoolName: '',
    eduStart: '',
    eduEnd: '',
    eduDesc: '',
    skills: '',
    projectName: '',
    projectLink: '',
    projectTech: '',
    projectDesc: '',
    certName: '',
    certProvider: '',
    certDate: '',
    certLink: '',
    workJobTitle: '',
    companyName: '',
    workStart: '',
    workEnd: '',
    workDesc: '',
    refName: '',
    refEmail: '',
    refPhone: '',
    profilePic: '',
    location: '',
    language1: '',
    language2: '',
    onlinePre:'',
    occupation:'',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const file = files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormData({
          ...formData,
          [name]: imageUrl,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('resumeData', JSON.stringify(formData));
    navigate('/resume');
  };

  return (
    <div  >
      <Link to="/" className="navbar-brand d-flex align-items-center text-center mt-3 py-0 px-4  ">
          <img src="assets/img/logo (1).png" alt="Umsebedzi4all Logo"   height="80"/>
      </Link>
      <div className="container  ">
        <h1 className="text-center text-primary fw-bold mb-4">Resume Builder</h1>

        {/* Step 1: Personal Info */}
        <form onSubmit={handleSubmit}>
        <div className="step-section active" id="step1">
          <h4 style={{ display: 'inline-block', backgroundColor: 'rgba(13, 110, 253, 0.1)', padding: '8px 12px', borderRadius: '6px' 
           }}>Personal Information</h4>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" name="firstName" onChange={handleChange} required />
            <div className="invalid-feedback">First name is required.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" name="lastName" onChange={handleChange} required />
            <div className="invalid-feedback">Last name is required.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} required />
            <div className="invalid-feedback">Email is required.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control" name="phone" onChange={handleChange} required />
            <div className="invalid-feedback">Phone is required.</div>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" name="location" autoComplete="off"
            data-optional="true" onChange={handleChange}  />
            <div className="invalid-feedback">Location is required.</div>
          </div>

          <div className="mb-3 col-12">
          <label className="form-label">Personal Profile</label>
          <textarea className="form-control" name="perProfile" placeholder="Write a short personal profile here..." onChange={handleChange} rows="4"></textarea>
          <div className="invalid-feedback">Please enter a personal profile.</div>
          </div>

          <button type="button" className="btn btn-primary float-end m-3" onClick={() => window.nextStep(1)}>
            Continue <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {/* Step 2: Address & Work Experience */}
        <div className="step-section m-3" id="step2">
          <h4 style={{ display: 'inline-block', backgroundColor: 'rgba(13, 110, 253, 0.1)', padding: '8px 12px', borderRadius: '6px' 
          }} className="mb-4">Personal Information</h4>
          <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">Occupation</label>
            <input type="tel" className="form-control" name="occupation" onChange={handleChange} required />
            <div className="invalid-feedback">Occupation is required.</div>
          </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Upload Photo <small className="text-muted">(optional)</small></label>
              <input
                type="file"
                className="form-control"
                name="profilePic"
                accept="image/*"
                placeholder="Optional"
                autoComplete="off"
                data-optional="true"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">City</label>
              <input type="text" className="form-control" name="city" onChange={handleChange} required />
              <div className="invalid-feedback">City is required.</div>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Country</label>
              <input type="text" className="form-control" name="country" onChange={handleChange} required />
              <div className="invalid-feedback">Country is required.</div>
            </div>

            <div className="mb-3 col-12">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" name="address" autoComplete="off"
              data-optional="true" onChange={handleChange} required />
              <div className="invalid-feedback">Address is required.</div>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Zip Code</label>
              <input type="text" className="form-control" name="zip" onChange={handleChange} required />
              <div className="invalid-feedback">Zip Code is required.</div>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">ID Number <small className="text-muted">(optional)</small></label>
              <input
                type="text"
                className="form-control"
                name="idNumber"
                placeholder="Optional"
                autoComplete="off"
                data-optional="true"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Birth Date(optional)</label>
              <input type="date" className="form-control" name="birthDate" autoComplete="off"
              data-optional="true" onChange={handleChange} required />
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Nationality</label>
              <input type="text" className="form-control" name="nationality" onChange={handleChange} required />
              <div className="invalid-feedback">Nationality is required.</div>
            </div>
            <div className="mb-3 p-3 col-md-6">
              <label className="form-label ">Languages</label>
              <input type="text" className="form-control  " name="language1"  placeholder="Enter Native Language"  onChange={handleChange} required />
              <label  ></label>
              <input type="text" className="form-control" name="language2" placeholder="Enter Intermediate Language"  onChange={handleChange} required />
              <div className="invalid-feedback">Languages is required.</div>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Driver's License</label>
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="license"
                placeholder="Optional"
                data-optional="true"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">online presence</label>
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="onlinePre"
                placeholder="e.g umsebedzi4all.co.za"
                data-optional="true"
                onChange={handleChange}
              />
            </div>
 
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-secondary" onClick={() => window.prevStep(1)}>
              Previous
            </button>
            <button type="button" className="btn btn-primary float-end" onClick={() => window.nextStep(2)}>
              Continue <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
 
       {/* Step 3: Education */}
       <div className="step-section m-3" id="step3">
       <h4 style={{ display: 'inline-block', backgroundColor: 'rgba(13, 110, 253, 0.1)', padding: '8px 12px', borderRadius: '6px' 
        }} className="mb-4">Education</h4>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">Degree</label>
              <input type="text" className="form-control" name="degree" onChange={handleChange}  required />
              <div className="invalid-feedback">Degree is required.</div>
        </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">School Name</label>
      <input type="text" className="form-control" name="schoolName" onChange={handleChange} required />
      <div className="invalid-feedback">School name is required.</div>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">Start Date</label>
      <input type="date" className="form-control" name="eduStart" onChange={handleChange} required />
      <div className="invalid-feedback">Start date is required.</div>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">End Date</label>
      <input type="date" className="form-control" name="eduEnd" onChange={handleChange} required />
      <div className="invalid-feedback">End date is required.</div>
    </div>

    <div className="mb-3 col-12">
      <label className="form-label">Description</label>
      <textarea className="form-control" name="eduDesc" onChange={handleChange} rows="4"></textarea>
      <div className="invalid-feedback">Please enter a description or major subjects studied.</div>
    </div>

    <h4 style={{ display: 'inline-block', backgroundColor: 'rgba(13, 110, 253, 0.1)', padding: '8px 12px', borderRadius: '6px' 
    }} className="mb-4">Skills</h4>

            <div className="mb-3">
              <label className="form-label">List Your Skills</label>
              <input
                type="text"
                className="form-control"
                name="skills"
                placeholder="e.g. Teamwork, Customer Service, Time Management, Problem Solving"
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Please enter at least one skill.</div>
            </div>
  </div>

  <div className="d-flex justify-content-between mt-4">
    <button type="button" className="btn btn-secondary" onClick={() => window.prevStep(2)}>
      Previous
    </button>
    <button type="button" className="btn btn-primary float-end" onClick={() => window.nextStep(3)}>
      Continue <i className="bi bi-arrow-right"></i>
    </button>
  </div>
</div>


{/* Step 4: Projects */}
<div className="step-section m-3" id="step4">
  <h4 style={{ display: 'inline-block', backgroundColor: 'rgba(13, 110, 253, 0.1)', padding: '8px 12px', borderRadius: '6px' 
}} className="mb-4">Projects</h4>
  <div className="row">
    <div className="mb-3 col-md-6">
      <label className="form-label">Project Title</label>
      <input type="text" className="form-control" name="projectName"  placeholder='e.g Retail Customer Service Initiative'    onChange={handleChange} required />
      <div className="invalid-feedback">Project name is required.</div>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">Portfolio Link (Optional)</label>
      <input type="text" className="form-control" name="projectLink" autoComplete="off" data-optional="true"  onChange={handleChange} placeholder="https://example.com"  />
    </div>

    <div className="mb-3 col-md-12">
      <label className="form-label">Skills Used</label>
      <input type="text" className="form-control" name="projectTech" autoComplete="off" data-optional="true" onChange={handleChange} placeholder="e.g. Customer Service, Communication, Time Management" />
    </div>

    <div className="mb-3 col-12">
      <label className="form-label">Project Description</label>
      <textarea className="form-control" name="projectDesc" autoComplete="off" data-optional="true" onChange={handleChange} rows="4" required></textarea>
    </div>
  </div>

  <div className="d-flex justify-content-between mt-4">
    <button type="button" className="btn btn-secondary" onClick={() => window.prevStep(3)}>
      Previous
    </button>
    <button type="button" className="btn btn-primary float-end" onClick={() => window.nextStep(4)}>
      Continue <i className="bi bi-arrow-right"></i>
    </button>
  </div>
</div>


{/* Step 5: Certifications & Courses */}
<div className="step-section m-3" id="step5">
  <h4 style={{ display: 'inline-block', backgroundColor: 'rgba(13, 110, 253, 0.1)', padding: '8px 12px', borderRadius: '6px' 
}} className="mb-4">Certifications & Courses</h4>
  <div className="row">
    <div className="mb-3 col-md-6">
      <label className="form-label">Course/Certification Name</label>
      <input type="text" className="form-control" name="certName" onChange={handleChange}  />
      <div className="invalid-feedback">Course or certification name is required.</div>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">Provider</label>
      <input type="text" className="form-control" name="certProvider" onChange={handleChange} placeholder="e.g. Udemy, Coursera, Microsoft" />
      <div className="invalid-feedback">Please provide the issuer/organization.</div>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">Date Completed</label>
      <input type="date" className="form-control" name="certDate" onChange={handleChange} required />
      <div className="invalid-feedback">Date of completion is required.</div>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">Certificate Link (optional)</label>
      <input type="text" className="form-control" name="certLink" placeholder="https://example.com/certificate" autoComplete="off" data-optional="true" />
    </div>

    <h4 style={{ display: 'inline-block', backgroundColor: 'rgba(13, 110, 253, 0.1)', padding: '8px 12px', borderRadius: '6px' 
}} className="mb-4">Work Experience</h4>

            <div className="mb-3 col-md-6">
              <label className="form-label">Job Title</label>
              <input type="text" className="form-control" name="workJobTitle" onChange={handleChange} required />
              <div className="invalid-feedback">Job title is required.</div>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Company Name</label>
              <input type="text" className="form-control" name="companyName" onChange={handleChange} required />
              <div className="invalid-feedback">Company name is required.</div>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Start Date</label>
              <input type="date" className="form-control" name="workStart" onChange={handleChange} required />
              <div className="invalid-feedback">Start date is required.</div>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">End Date</label>
              <input type="date" className="form-control" name="workEnd" onChange={handleChange} />
              <div className="invalid-feedback">End date is required (or "Present").</div>
            </div>

            <div className="mb-3 col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" name="workDesc" onChange={handleChange} rows="4" required></textarea>
              <div className="invalid-feedback">Please describe your responsibilities or achievements.</div>
            </div>

  <div className="mb-3 col-12">
  <label className="form-label" style={{ display: 'inline-block', backgroundColor: 'rgba(13, 110, 253, 0.1)', padding: '8px 12px', borderRadius: '6px' }}>Reference Name</label>
  <input
    type="text"
    className="form-control"
    name="refName"
    onChange={handleChange}
    placeholder="Enter reference's full name"
    required
  />
  <div className="invalid-feedback">Please enter the reference's full name.</div>
</div>

<div className="mb-3 col-12">
   
  <input
    type="email"
    className="form-control"
    name="refEmail"
    onChange={handleChange}
    placeholder="Enter reference's email"
    required
  />
  <div className="invalid-feedback">Please enter a valid email address.</div>
</div>

<div className="mb-3 col-12">
   
  <input
    type="tel"
    className="form-control"
    name="refPhone"
    onChange={handleChange}
    placeholder="Enter reference's phone number"
    required
  />
  <div className="invalid-feedback">Please enter a valid phone number.</div>
</div>
</div>

<div className="d-flex justify-content-between mt-4">
    <button type="button" className="btn btn-secondary" onClick={() => window.prevStep(4)}>
      Previous
    </button>
    <button type="submit" className="btn btn-primary  ">
    Create Resume 
    </button>
  </div>
</div>
</form>
</div>
</div>
  );
}

export default FormResume;
