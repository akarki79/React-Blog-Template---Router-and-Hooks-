import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/data.json";

const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postUrl: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [postUrl, setpostUrl] = useState("");

  useEffect(() => {
    const postUrl = props.match.params.postUrl;
    const post = blogPost.data.find((post) => post.postUrl == postUrl);
    setPost(post);
    setpostUrl(postUrl);
  }, [post, props.match.params.postUrl]);

  if (post.blogImage == "") return null;

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            Posted on {post.postedOn} by {post.author}
          </span>
        </div>
        <div className="postImageContainer">
          <img
            src={require(`../../blogPostsImages/` + post.blogImage)}
            alt={post.blogTitle}
          />
        </div>
        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
