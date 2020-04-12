import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/data.json";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div className="sideBarContainer" style={{ width: props.width }}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="cardHeader">
          <span>About</span>
        </div>
        <div className="profileImageContainer">
          <img src={require("../../blogPostsImages/04.jpg")} alt="" />
        </div>
        <div className="cardBody">
          <span>Card Body - Please enter the body text here</span>
        </div>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <div className="cardHeader">
          <span>RECENT POST</span>
        </div>
        <div className="recentPosts">
          {posts.map((post, index) => {
            return (
              <NavLink key={index} to={`/posts/${post.postUrl}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
