import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import EditIcon from "../../images/pngfind 1.svg";

const Skill = () => {
  return (
    <div className="lg:container bg-white rounded-md mt-[2rem]">
      <div className="py-[2rem] h-[170px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] ml-[2rem] font-semibold">Skills and portfolio</h1>
          <div className="flex items-center gap-[1rem]">
            <BsPlusLg />
            <img src={EditIcon} alt="" />
          </div>
        </div>
        <div >
          <div className="flex gap-[1rem] font-normal items-center leading-8">
            <span>
              <BiCodeAlt size={20} />
            </span>
            <p>Node.js, React.js, Javascript, Tailwind, Python.</p>
          </div>

          <div className="flex gap-[1rem] font-normal items-center leading-7">
            <span>
              <AiOutlineGithub size={20} />
            </span>
            <p>Github</p>
          </div>

          <div className="flex gap-[1rem] font-normal items-center leading-7">
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
