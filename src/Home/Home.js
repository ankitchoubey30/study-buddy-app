import React from 'react';
import './Home.css';
import logoImage from '../Home/logo.jpeg';
import profileImage from '../Home/profile.png'
import loanImage from '../Home/loanImage.JPG'
function Home() {
  return (
    <div className="App">
      <header className="header">
        <div className="profile-picture">
         <img src={profileImage}/>
        </div>
        <div className="logo">
          <img src={logoImage} alt="Study Buddy" />
        </div>
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <main>
        <section className="banner">
          <img src={loanImage} alt="Banner" />
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
              <a href='/rentPage'><p>Rent</p></a>
              
            </div>
            <div className="service">
              <div className="service-icon tuition-icon"></div>
              <a href='/tuitionFeePage'> <p>Tuition Fee</p></a>
            </div>
            <div className="service">
              <div className="service-icon materials-icon"></div>
              <a href='/courseMaterialsPage'> <p>Course Materials</p></a>
            </div>
            <div className="service">
              <div className="service-icon tech-icon"></div>
              <a href='/techSuppliesPage'><p>Tech & Supplies</p></a>
            </div>
          </div>
          <button className="know-more-button">Know More</button>
        </section>
      </main>
    </div>
  );
}

export default Home;