import React from "react";
import Links from "../components/Linksection/Links";
import Header from "../components/Header/Header";
import Ads from "../components/Adssection/Ads";
import "./user.css";
import About from "../components/Aboutsection/About";
import File from "../components/Filessection/File";
import Skill from "../components/Skillssection/Skill";
import Contact from "../components/Contactsection/Contact";

const Backend = () => {
  return (
    <div>
      <Links />
      <div className="user_section container">
        <div className="user_header">
          <Header />
          <About />
          <File />
          <Skill />
          <Contact />
        </div>
        <Ads />
      </div>{" "}
    </div>
  );
};

export default Backend;
