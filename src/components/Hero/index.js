import React from "react";
import "./style.css";

import Card from "../UI/Card";
import Logo from "../Logo";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div>
      <Card>
        <Logo />
        <Navbar />
      </Card>
    </div>
  );
};

export default Hero;
