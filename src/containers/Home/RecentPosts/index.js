import React from "react";
import "./style.css";

import Card from "../../../components/UI/Card";

const RecentPosts = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img src={require("../../../blogPostsImages/02.jpg")} alt="" />
        </div>
        <div>
          <span>Post Category</span>
          <h2>Post Title</h2>
          <p>Posted Date and Author's Name </p>
          <p>Post text goes here!!!</p>
          <button>Read More &hellip;</button>
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;
