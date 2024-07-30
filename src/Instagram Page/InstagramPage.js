import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramPage.css';
import instagramLogo from './instagram-text-icon.png'; // Make sure to replace with the correct path
import userProfileIcon from './user.jpg'; // Make sure to replace with the correct path
import studyBuddyProfilePic from './SB.jpg'; // Make sure to replace with the correct path
import adImage from './Banner.jpg'; // Make sure to replace with the correct path
import story1 from './f1.jpg'
import story2 from './f2.jpg'

const InstagramPage = () => {
    return (
        <div className="instagram-page">
            <aside className="sidebar">
                <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" />
                <nav className="navigation" style={{ backgroundColor: 'white' }}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#search">Search</a></li>
                        <li><a href="#reels">Reels</a></li>
                        <li><a href="#messages">Messages</a></li>
                        <li><a href="#notifications">Notifications</a></li>
                        <li><a href="#profile">Profile</a></li>
                        <li><a href="#more">More</a></li>
                    </ul>
                </nav>
                <div className="user-profile">
                    <img src={userProfileIcon} alt="User Profile" className="user-profile-icon" />
                    <span className="user-profile-name">John</span>
                </div>
            </aside>
            <main className="main-content">
                <div className="stories">
                    <div className="story">
                        <img src={story1} alt="Friend 1" className="story-profile-pic" />
                        <span>Bell</span>
                    </div>
                    <div className="story">
                        <img src={story2} alt="Friend 2" className="story-profile-pic" />
                        <span>George</span>
                    </div>
                    {/* Add more stories as needed */}
                </div>
                <div className="feed">
                    <div className="ad-post">
                        <div className="header">
                            <img src={studyBuddyProfilePic} alt="StudyBuddy" className="profile-pic" />
                            <h6 className="username">Sponsored</h6>
                        </div>
                        <img src={adImage} alt="Ad" className="ad-image" height="50px" width="300px" />
                        <div className="post-content">
                            <h2>Empower Your Education with Easy, Personalized Payment Plans for Stress-Free Budgeting.</h2>
                            <br />
                            <p>Unlock the potential of your academic journey with StudyBuddy! Our innovative platform is designed to help you manage all your student expenses effortlessly. Whether it's buying a laptop, paying rent, or purchasing course materials, StudyBuddy offers a seamless Buy Now, Pay Later feature that empowers you to invest in your education without the immediate financial burden. Connect with peers, access exclusive resources, and make informed financial decisions with ease. Join StudyBuddy today and take control of your educational finances—because your focus should be on your studies, not on financial stress.</p>
                            <Link to="/study-buddy-app">
                                <button className="get-started-button">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InstagramPage;
