import React, { useState } from "react";
import "./About.css";
import Editicon from "../../images/pngfind 1.svg";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        several software technology companies. I have great leadership skills
        and have demostrated ability to inspire, motivate and manage a team.
      </p>
    </div>
  );
  const linkName = readMore ? "..See less" : "..See more";

  return (
    <div className="container about_section">
      <div className=" about">
        <div className="about_edit">
          <h1 className=" about_name">About</h1>
          <img src={Editicon} alt="" />
        </div>
        <div className=" about_desktop">
          <p className="about_p1">
            I am an experienced Software Engineer with passion for building
            innovative softwares to drive business growth. I have track history
            of working with several software technology companies.
          </p>

          <p className="about_p ">
            I have great leadership skills and have demostrated ability to
            inspire, motivate and manage a team.
          </p>
        </div>

        {/* for mobile */}
        <div className=" about_mobile">
          <p className="lg:w-[740px] text-[12px]">
            I am an experienced Software Engineer with passion for building
            innovative softwares to drive business growth. I have track history
            of working with {readMore && extraContent}
            <button
              className="text-[12px]"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <h2>{linkName}</h2>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
