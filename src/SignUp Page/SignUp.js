import React from 'react';
import './SignUp.css'; // Import CSS file for styling
import StudyBuddy from './SB.jpg'; // Ensure this path is correct
import profile from './user.jpg'; // Ensure this path is correct
import { InstagramLoginButton } from 'react-social-login-buttons';
import { LoginSocialInstagram } from 'reactjs-social-login';

const SignupPage = () => {
    return (
        <div className="signup-container">
            <div className="signup-card">
                <img
                    src={profile} // Ensure this path is correct
                    alt="Profile"
                    className="profile-image"
                />
                <p>Hi John</p>
                <LoginSocialInstagram
                    appId="811250224452916" // Ensure this is a valid Instagram App ID
                    onResolve={(response) => {
                        console.log('Response:', response);
                    }}
                    onReject={(error) => {
                        console.log('Error:', error);
                    }}
                >
                    <InstagramLoginButton />
                </LoginSocialInstagram>
            </div>
        </div>
    );
};

export default SignupPage;
