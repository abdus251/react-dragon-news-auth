import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container p-4">
      <h1 className="text-3xl font-bold mb-4">About Dragon News</h1>
      <p className="mb-4">
        Welcome to Dragon News, your go-to source for the latest and most reliable news in the world of sports, entertainment, and lifestyle. Our mission is to provide our readers with accurate, timely, and engaging content that keeps them informed and entertained.
      </p>
      <p className="mb-4">
        At Dragon News, we believe in the power of storytelling. Our team of dedicated journalists and writers work tirelessly to bring you in-depth articles, breaking news, and insightful commentary on the topics that matter most to you.
      </p>
      <p className="mb-4">
        Whether you're a sports enthusiast looking for the latest match updates, an entertainment buff eager for celebrity news, or someone interested in lifestyle trends, Dragon News has something for everyone. We strive to create a community where readers can engage with our content and share their thoughts.
      </p>
      <p className="mb-4">
        Thank you for choosing Dragon News as your trusted news source. We are committed to delivering quality journalism and keeping you informed about the world around you.
      </p>
      <p className="font-bold">Stay connected with us for the latest updates!</p>
    </div>
    </>
  );
};

export default About;