import React from "react";
import Links from "../components/Linksection/Links";
import Header from "../components/Header/Header";
import Ads from "../components/Adssection/Ads";
import About from "../components/Aboutsection/About";
import File from "../components/Filessection/File";
import Skill from "../components/Skillssection/Skill";
import Contact from "../components/Contactsection/Contact";
import Footer from "../components/Footer";

const Backend = () => {
  return (
    <div>
      <Links />
      <div className=" lg:flex-row gap-[2rem] mt-[3rem] flex-col flex container">
        <div className="">
          <Header />
          <About />
          <File />
          <Skill />
          <Contact />
        </div>
        <Ads />
      </div>{" "}
      <Footer/>
    </div>
  );
};

export default Backend;
