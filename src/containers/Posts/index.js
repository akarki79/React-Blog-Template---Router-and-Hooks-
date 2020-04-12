import React from "react";
import "./style.css";

import BlogPost from "../../components/BlogPost";
import Layout from "../../components/Layout";

const Posts = (props) => {
  return (
    <Layout>
      <BlogPost {...props} />
    </Layout>
  );
};

export default Posts;
