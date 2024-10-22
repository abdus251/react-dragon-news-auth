import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Career = () => {
  return (
    <>
    <Navbar/>
    <div className="career-container p-4">
      <h1 className="text-3xl font-bold mb-4">Join the Dragon News Team</h1>
      <p className="mb-4">
        Are you passionate about storytelling and delivering high-quality content to a wide audience? Do you want to be part of a dynamic team that's shaping the future of online news? Look no further! Dragon News is always on the lookout for talented individuals to join our team.
      </p>
      <h2 className="text-2xl font-bold mb-2">Current Openings</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>
          <strong>Senior Journalist</strong> - Covering sports, entertainment, and lifestyle news
        </li>
        <li>
          <strong>Frontend Developer</strong> - Building and maintaining our React-based news platform
        </li>
        <li>
          <strong>Social Media Manager</strong> - Managing our social media presence and creating engaging content
        </li>
      </ul>
      <p className="mb-4">
        If you're interested in any of these positions, please submit your application, including your resume and a cover letter, to <a href="mailto:careers@dragonnews.com">careers@dragonnews.com</a>.
      </p>
      <h2 className="text-2xl font-bold mb-2">Why Work at Dragon News?</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>
          <strong>Dynamic Work Environment</strong> - Collaborate with a team of passionate and talented individuals
        </li>
        <li>
          <strong>Opportunities for Growth</strong> - Develop your skills and take on new challenges in a fast-paced industry
        </li>
        <li>
          <strong>Competitive Benefits</strong> - Enjoy a comprehensive benefits package, including health insurance, retirement plans, and more
        </li>
      </ul>
      <p className="mb-4">
        At Dragon News, we're committed to creating a diverse and inclusive workplace where everyone can thrive. We look forward to hearing from you!
      </p>
    </div>
    </>
  );
};

export default Career;