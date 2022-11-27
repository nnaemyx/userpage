import React from "react";
import Header from "../components/Header/Header";
import Ads from "../components/Adssection/Ads";
import Links from "../components/Linksection/Links";
import "./user.css";
import About from "../components/Aboutsection/About";
import File from "../components/Filessection/File";
import Skill from "../components/Skillssection/Skill";

const Frontend = () => {
  return (
    <div>
      <Links />
      <div className="user_section container">
        <div className="user_header">
                  <Header />
                  <About />
                  <File />
                  <Skill/>
        </div>
        <Ads />
      </div>
    </div>
  );
};

export default Frontend;
