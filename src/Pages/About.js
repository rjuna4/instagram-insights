import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../IMG_4637.jpeg';
import logo from '../IMG_4637.jpeg';
 
const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 style={heading}>
                About Me
            </h1>
            <div style={aboutContainer}>
                <div style={imgContainer}>
                    <img src={logo} className="App-profile-pic" alt="profile-pic" style={imgStyle} />
                </div>
                <div style={headerContainer}>
                    <AboutHeader>
                    Hi! My name is Rihab Junagadhwala and I graduated from Loyola University Chicago 
                    with a B.S. in Software Engineering. This website was created with React and utilizes 
                    my personal Instagram data. My goal was to create visual aids and extract easily 
                    digestible statistics to see how my activity on Instagram has fluctuated in the past 
                    year. <a href="/" onClick={(e) => {e.preventDefault(); navigate('/');}}>The Home Page</a> lists a few basic insights that help me understand my activity 
                    -- more insights will be coming soon.
                    </AboutHeader>
                </div>
            </div>
        </div>
    );
};
 
export default About;

const heading = {
    paddingTop: '30px'
}

const AboutHeader = styled.a`
color: #ac9cff;
font-size: calc(5px + 2vmin);
text-decoration: none;
padding: 0 2rem;
height: 100%
a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline; /* Add underline on hover */
    }
  }
`;

const imgContainer = {
    //padding: '30px',
  };
  
const imgStyle = {
    height: "600px",
    width: "400px",
    border: "4px solid",
    borderColor: "#ac9cff",
    objectFit: "cover"
};

const aboutContainer = {
    display: "flex",
    flexDirection: "row",
    padding: '30px'
}

const headerContainer = {
    display: "flex",
    flexDirection: "row",
    padding: '30px',
    alignItems: 'center'
}

