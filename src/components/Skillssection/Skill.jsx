import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import EditIcon from "../../images/pngfind 1.svg";

const Skill = () => {
  return (
    <div className="lg:container bg-white rounded-md mt-[2rem]">
      <div className="lg:py-[2rem] py-[1rem] px-4 lg:px-0 h-[132px] lg:h-[170px]">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-[20px] text-[13px] lg:ml-[2rem] font-semibold">Skills and portfolio</h1>
          <div className="flex items-center gap-[1rem]">
            <BsPlusLg size={13} />
            <img src={EditIcon}  alt="" className="w-[20px]" />
          </div>
        </div>
        <div className="text-[13px] lg:text-[14px] font-normal" >
          <div className="flex lg:gap-[1rem] gap-[5px] font-normal items-center leading-8">
            <span>
              <BiCodeAlt size={20} />
            </span>
            <p>Node.js, React.js, Javascript, Tailwind, Python.</p>
          </div>

          <div className="flex lg:gap-[1rem] gap-[5px] font-normal items-center leading-7">
            <span>
              <AiOutlineGithub size={20} />
            </span>
            <p>Github</p>
          </div>

          <div className="flex lg:gap-[1rem] gap-[5px] font-normal items-center leading-7">
            <span>
              <TfiWorld size={20} />
            </span>
            <p>www.website.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
