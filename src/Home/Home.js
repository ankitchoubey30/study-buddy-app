import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="header">
        <div className="profile-picture">
         <img src="/images/profile.jpg" alt="Profile" />
        </div>
        <div className="logo">
          <img src="/images/tutionfee.png" alt="Study Buddy" />
        </div>
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <main>
        <section className="banner">
          <img src="path_to_banner_image.jpg" alt="Banner" />
        </section>
        <section className="main-content">
          <div className="content-box">
            <h2>Financing and Saving All at One Place</h2>
            <p>Invest in Your Education, Personal Needs, and Future with <span className="highlight">Study Buddy</span></p>
            <p className="subtext">Empower Your Education, Simplify Your Finances</p>
          </div>
          <div className="services">
            <div className="service">
              <div className="service-icon rent-icon"></div>
              <p>Rent</p>
            </div>
            <div className="service">
              <div className="service-icon tuition-icon"></div>
              <p>Tuition Fee</p>
            </div>
            <div className="service">
              <div className="service-icon materials-icon"></div>
              <p>Course Materials</p>
            </div>
            <div className="service">
              <div className="service-icon tech-icon"></div>
              <p>Tech & Supplies</p>
            </div>
          </div>
          <button className="know-more-button">Know More</button>
        </section>
      </main>
    </div>
  );
}

export default Home;