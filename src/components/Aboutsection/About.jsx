import React, { useState } from "react";
import Editicon from '../../images/pngfind 1.svg'

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
    <div className="bg-white mt-6 rounded-md">
      <div className="lg:w-[830px] lg:container  py-8 pl-[1rem] lg:h-[190px]">
         <div className="flex justify-between">
          <h1 className=" font-semibold text-[17px]">About</h1>
          <img src={Editicon} width={30} alt="" className="pr-4 lg:pr-0" />
        </div>
        <div className="hidden md:block">
          <p className="xl:w-[740px] lg:w-[620px]">
            I am an experienced Software Engineer with passion for building
            innovative softwares to drive business growth. I have track history
            of working with several software technology companies.
          </p>

          <p className="lg:mt-4 xl:w-[680px] lg:w-[500px]">
            I have great leadership skills and have demostrated ability to
            inspire, motivate and manage a team.
          </p>
        </div>

        {/* for mobile */}
        <div className="md:hidden block">
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
