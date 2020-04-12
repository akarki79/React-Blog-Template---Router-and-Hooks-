import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import RecentPosts from "./RecentPosts";

import blogData from "../../data/data.json";
import Layout from "../../components/Layout";
//import Layout from "../../components/Layout";

const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="" />
    </div>
  );
};

const ImageGallery = (props) => (
  <div className="galleryPosts" style={props.galleryStyle}>
    <section style={{ width: props.largeWidth }}>
      <div className="mainImageWrapper">
        <img
          src={require("../../blogPostsImages/" + props.imagesArray[0])}
          alt=""
        />
      </div>
    </section>
    <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
      {props.imagesArray.map((image, index) => (
        <SideImage
          key={index}
          height={props.sideImageHeight}
          src={require("../../blogPostsImages/" + image)}
          alt=""
        />
      ))}
    </section>
  </div>
);

const Home = (props) => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden",
  };
  const sideImageHeight = galleryHeight / 3;
  const imgAr = blogData.data.map((post) => post.blogImage);
  return (
    <div style={{ marginTop: "20px" }}>
      <Card>
        <ImageGallery
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          galleryStyle={galleryStyle}
          imagesArray={imgAr}
        />
      </Card>

      <Layout>
        <RecentPosts style={{ width: "70%" }} imagesArray={imgAr} />
      </Layout>
    </div>
  );
};

export default Home;
