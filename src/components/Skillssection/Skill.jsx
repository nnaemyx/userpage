import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import EditIcon from "../../images/pngfind 1.svg";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="container skill_section">
      <div className="skill">
        <div className="skill_top">
          <h1>Skills and portfolio</h1>
          <div className="skill_edit">
            <BsPlusLg />
            <img src={EditIcon} alt="" />
          </div>
        </div>
        <div >
          <div className="skill_text">
            <span>
              <BiCodeAlt size={20} />
            </span>
            <p>Node.js, React.js, Javascript, Tailwind, Python.</p>
          </div>

          <div className="skill_text">
            <span>
              <AiOutlineGithub size={20} />
            </span>
            <p>Github</p>
          </div>

          <div className="skill_text">
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
