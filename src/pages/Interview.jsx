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
<p>Preparing for common interview questions is crucial, as these are likely to come up in most interviews. Here are some of the most frequently asked questions, along with tips on how to answer them effectively:</p>
<ul>
  <li><strong>Tell me about yourself:</strong> This is often the first question in an interview. It's your opportunity to introduce yourself and set the tone for the conversation. Keep your answer brief, focusing on your professional background, key skills, and what makes you excited about this role. Avoid diving too deep into personal details, and instead emphasize what you can bring to the company.</li>
  
  <li><strong>Why do you want to work here?</strong> This question evaluates your interest in the company and your understanding of its culture and values. Before the interview, research the company’s mission, recent projects, and overall goals. Tailor your response to show that you align with their values and how your skills and experience can contribute to their success. Avoid generic answers like "I need a job." Instead, focus on what excites you about the company.</li>
  
  <li><strong>What are your strengths and weaknesses?</strong> When discussing your strengths, focus on qualities that are directly relevant to the job. Be specific and provide examples that demonstrate how you’ve successfully applied these strengths in the past. When talking about weaknesses, be honest but strategic. Choose a weakness that doesn’t directly impact the role you're applying for, and follow up with steps you're taking to improve. This shows self-awareness and a commitment to personal growth.</li>
  
  <li><strong>Why should we hire you?</strong> This is your chance to sell yourself and highlight why you’re the perfect fit for the role. Summarize your qualifications, skills, and experience, and align them with the company's needs. Show enthusiasm for the position and make it clear that you’re committed to contributing to the company’s success. Tailor your response to the specific role and demonstrate that you understand the company’s priorities.</li>
  
  <li><strong>Where do you see yourself in five years?</strong> This question is designed to gauge your long-term goals and whether you’re likely to stay with the company. While it’s important to be ambitious, be realistic in your answer. Discuss career growth that aligns with the company’s potential and show that you’re interested in developing your skills and taking on increasing responsibilities.</li>
  
  <li><strong>Can you describe a challenging situation at work and how you handled it?</strong> This behavioral question aims to assess how you solve problems and manage pressure. Use the STAR technique (Situation, Task, Action, Result) to structure your answer. Describe the challenge, explain your approach to resolving it, and highlight the positive outcome. Choose an example that showcases your skills and ability to remain calm under pressure.</li>
</ul>
<p>These are just a few of the common interview questions you may encounter. Practicing your answers in advance will help you feel more confident and prepared when the real interview takes place.</p>
`;
        break;
      case 'interview-tips':
        contentHTML = `
          <h2>Interview Tips</h2>
             <ul>
  <li><strong>Do thorough research about the company:</strong> Before the interview, take time to learn as much as you can about the company. Understand its history, values, mission, and vision. Get to know the products or services the company offers and how they position themselves in the market. This knowledge will help you tailor your responses to align with the company's values. It’s also a great opportunity to ask insightful questions during the interview, demonstrating that you’ve done your homework. Consider checking the company’s website, social media channels, and news articles to stay informed on their latest projects or news.</li>
  
  <li><strong>Practice your answers to common interview questions:</strong> Being prepared for the typical interview questions is crucial. Some of the most common ones include "Tell me about yourself," "What are your strengths and weaknesses?", "Why should we hire you?" and "Where do you see yourself in five years?" Take time to reflect on your experiences and how they can relate to the job. Craft clear and concise answers that highlight your skills, achievements, and goals. It’s also helpful to use the STAR technique (Situation, Task, Action, Result) to structure answers to behavioral questions. Practicing your answers with a friend or in front of a mirror will boost your confidence and allow you to refine your responses.</li>
  
  <li><strong>Dress appropriately for the interview:</strong> Your appearance plays an important role in making a good first impression. Dress according to the company’s culture and the role you are applying for. If you’re unsure about the dress code, it’s better to be slightly overdressed than underdressed. In formal industries, such as finance or law, a suit or professional attire is expected. For more casual industries like tech or creative fields, business casual may be appropriate. Be sure your clothes are neat, clean, and well-fitted. Pay attention to grooming as well—make sure your hair and nails are tidy, and avoid heavy fragrances.</li>
  
  <li><strong>Prepare questions to ask the interviewer:</strong> When given the opportunity to ask questions at the end of the interview, be ready with a list of thoughtful inquiries. This shows that you are truly interested in the company and the position. Ask about the team dynamics, company culture, or the role’s challenges and growth opportunities. Avoid asking questions that can easily be found on the company’s website or in the job description, such as salary or benefits. Instead, focus on questions that demonstrate your long-term interest and eagerness to contribute to the company’s success.</li>
  
  <li><strong>Be punctual:</strong> One of the most important aspects of professionalism is punctuality. Arriving 10 to 15 minutes early for the interview not only gives you time to settle in but also shows that you respect the interviewer's time. Being late can create a negative impression, so plan ahead for potential delays such as traffic or public transportation. If it’s a virtual interview, test your technology beforehand to avoid technical issues. Ensure your internet connection, microphone, and camera are all working properly.</li>
  
  <li><strong>Maintain positive body language:</strong> During the interview, your body language speaks just as loudly as your words. Maintain good posture by sitting up straight and avoiding slouching. Make eye contact with the interviewer, as it shows confidence and helps build rapport. Smile and nod when appropriate to convey warmth and attentiveness. A firm handshake at the beginning and end of the interview can also leave a positive impression. Avoid crossing your arms, tapping your feet, or other nervous habits that could make you appear disengaged or anxious. Pay attention to the interviewer’s body language as well—this can give you clues about their reactions to your responses.</li>
  
  <li><strong>Follow up after the interview:</strong> Sending a follow-up email within 24 hours of your interview is a key step in demonstrating gratitude and reinforcing your interest in the position. In your email, thank the interviewer for their time and express your enthusiasm for the opportunity. You can also briefly reiterate a point from the interview that highlights your qualifications or fits well with the company’s needs. This is also an opportunity to clarify any questions or provide additional information you may have forgotten to mention during the interview. A well-crafted thank-you note can make a lasting positive impression and set you apart from other candidates.</li>
  
  <li><strong>Prepare for different interview formats:</strong> Some companies may conduct phone or video interviews as part of the hiring process, while others may have in-person interviews. If you’re interviewing remotely, ensure that your technology works well in advance. For video interviews, choose a quiet, well-lit environment free from distractions. Be mindful of your background, as it can impact how professional you appear. If the interview is in-person, plan your route and allow time for potential delays. You may also be asked to complete an assessment or test as part of the interview process, so be prepared for that as well.</li>
  
  <li><strong>Be yourself:</strong> While it’s important to be professional, it’s also essential to be authentic. Interviewers want to understand not just your qualifications, but also whether you’ll be a good fit for the team. Let your personality shine through by sharing stories that reflect your values, work ethic, and passions. Don’t be afraid to show enthusiasm and genuine interest in the position. Being yourself will help both you and the interviewer assess whether the job is a good match for you.</li>
  
  <li><strong>Stay calm and confident:</strong> Interviews can be nerve-wracking, but try to remain calm and confident throughout the process. Take deep breaths, listen carefully to the questions, and don’t be afraid to pause before answering. If you’re unsure about a question, it’s okay to ask for clarification. If you don’t know the answer to something, be honest about it, but try to turn the situation into an opportunity to showcase your willingness to learn and grow. A positive attitude and confidence in your abilities will leave a great impression.</li>
</ul> `

        break;
      case 'mock-interviews':
        contentHTML = `
          <h2>Mock Interviews</h2>
<p>Mock interviews are a great way to simulate real interview conditions and practice your responses in a realistic setting. They help you get comfortable with the format, manage nervousness, and identify areas for improvement.</p>
<p>You can practice mock interviews with friends, family, or colleagues to get immediate feedback on your performance. This will help you refine your answers, improve your communication, and receive constructive criticism. If you're looking for a more professional approach, there are several online platforms where you can schedule mock interviews with experts in your field. These platforms often provide personalized feedback and tips to help you excel.</p>
<p>Mock interviews allow you to:
  <ul>
    <li>Practice common interview questions in a safe environment.</li>
    <li>Get feedback on your body language, tone, and communication style.</li>
    <li>Build confidence in handling challenging questions or scenarios.</li>
    <li>Identify areas for improvement before the actual interview.</li>
  </ul>
</p>
<p>Whether you practice with friends or seek out professional mock interviews, the experience will help you feel more prepared and confident on the big day.</p>
`;
        break;
      default:
        contentHTML = `
          <h2>Welcome to the Interview Guide!</h2>
<p>Congratulations on taking the first step toward acing your interview! This guide is designed to help you prepare thoroughly and confidently for your upcoming interview. Whether you're new to the job market or a seasoned professional looking to refine your skills, we've got you covered.</p>
<p>Click on the topics above to explore detailed tips, tricks, and strategies that will help you shine during your interview. From company research to follow-up emails, each section covers essential aspects of the interview process. Ready to get started? Dive into the topics to discover the best practices and actionable advice for every step of your interview journey.</p>
<p>Good luck, and remember—preparation is the key to success!</p>`;
    }
    setContent(contentHTML);
  };

  return (
    <div style={{ backgroundColor: 'rgba(147, 172, 211, 0.548)' }}>
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

      <div className="container py-5">
        <h1 className="text-center text-primary fw-bold display-4 mb-4">Interview Guide</h1>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Interview Topics
          </button>
          <ul className="dropdown-menu m-3 rounded-3">
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
               
            </p>
          </div>

          {/* Image */}
          <div className="col-md-4 image-container mb-4">
            <img src="assets/img/interview.png" alt="Interview Guide" className="img-fluid rounded float-end" />
          </div>
        </div>
        <a href="#" className="btn btn-lg rounded-circle btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div>
    </div>
  );
}

export default Interview;
