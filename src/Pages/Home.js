import logo from '../DSCN1135.jpg';
import '../DSCN1135.jpg';
import React from "react";
import FollowingRate from '../Components/FollowingRate';
import PostsViewed from '../Components/PostsViewed';
import LikedPosts from '../Components/LikedPosts';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function Home() {
    return (
        <div>
          <div style={imgContainer}>
            <img src={logo} className="App-profile-pic" alt="profile-pic" style={imgStyle} />
          </div>
            <h1>
                  Rihab Junagadhwala
              </h1>
              <h2>
                  Instagram Account Insights
            </h2>
            <iframe src="https://snapwidget.com/embed/1069344" class="snapwidget-widget" allowtransparency="true" frameborder="0"  style={{ overflow:"hidden",  width:"765px", height:"510px"}} title="Posts from Instagram"></iframe>
          <div style={followingRate}>
            <FollowingRate></FollowingRate>
          </div>
          <div style={postsViewed}>
            <PostsViewed></PostsViewed>
          </div>
          <div style={likedPosts}>
            <LikedPosts></LikedPosts>
          </div>
        </div>
    );
};
 
export default Home;

const imgContainer = {
  paddingTop: '30px',
};

const imgStyle = {
  height: "200px",
  width: "200px",
  borderRadius: "50%",
  border: "5px solid",
  borderColor: "#ac9cff",
  objectFit: "cover"
};

const followingRate = {
  padding: "50px",
  height: '300px',
  width: '500px', 
  margin: '0 auto' 
};

const likedPosts = {
  padding: "50px",
  height: '300px', 
  width: '500px', 
  margin: '0 auto'
};

const postsViewed = {
  padding: "50px",
  height: '300px',
  width: '500px', 
  margin: '0 auto' 
};