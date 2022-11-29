import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import EditIcon from "../../images/pngfind 1.svg";

const Contact = () => {
  return (
    <div className="container bg-white rounded-md mt-2 ">
      <div className="px-2 h-[158px]">
        <div className=" flex items-center justify-between ">
          <h1 className="text-[20px]">Contact</h1>
          <div className="flex items-center gap-[1rem]">
            <BsPlusLg />
            <img src={EditIcon} alt="" />
          </div>
        </div>

        <div className="contact_body flex items-center gap-[5rem] leading-[1.1rem]">
          <div className="contact_first font-semibold mb-[21px]">
            <div className="contact_text flex items-center gap-[1rem]">
              <span>
                <MdPhoneInTalk size={20} />
              </span>
              <p>Phone</p>
            </div>
            <h4 className="contact_second ml-[2rem] font-400">+2349865755412</h4>

            <div className="flex items-center gap-[1rem] ">
              <span>
                <MdEmail size={20} />
              </span>
              <p>Email</p>
            </div>
            <h4 className="contact_second ml-[2rem] font-400">random@gmail.com</h4>
          </div>

          <div >
            <div className="flex items-center gap-[1rem]">
              <span>
                <AiOutlineTwitter size={20} />
              </span>
              <p>Twitter</p>
            </div>
            <h4 className="contact_second ml-[2rem] font-400">@nocode</h4>

            <div className="contact_text flex items-center gap-[1rem]">
              <span>
                <FaDiscord size={20} />
              </span>
              <p>Discord</p>
            </div>
            <h4 className="contact_second ml-[2rem] font-400">nocode</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
