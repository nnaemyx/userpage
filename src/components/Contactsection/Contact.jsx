import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import EditIcon from "../../images/pngfind 1.svg";

const Contact = () => {
  return (
    <div className="lg:container bg-white rounded-md mt-6 mb-6 ">
      <div className="lg:px-2 px-4 pt-2 h-[158px]">
        <div className=" flex items-center justify-between ">
          <h1 className="lg:text-[20px] text-[13px] font-semibold">Contact</h1>
          <div className="flex items-center gap-[1rem]">
            <BsPlusLg  size={13} />
            <img src={EditIcon}  alt="" className="w-[20px]" />
          </div>
        </div>

        <div className="flex items-center mt-2 lg:gap-[5rem] gap-4 leading-6">
          <div className="mb-[21px]">
            <div className="flex items-center gap-[1rem]">
              <span>
                <MdPhoneInTalk size={17} />
              </span>
              <p className="text-[14px] font-semibold">Phone</p>
            </div>
            <h4 className="ml-[2rem] text-[14px] font-normal">+2349865755412</h4>

            <div className="flex items-center gap-[1rem] ">
              <span>
                <MdEmail size={17} />
              </span>
              <p className="text-[14px] font-semibold">Email</p>
            </div>
            <h4 className="ml-[2rem] text-[14px] font-normal">random@gmail.com</h4>
          </div>

          <div className="-mt-4" >
            <div className="flex items-center gap-[1rem]">
              <span>
                <AiOutlineTwitter size={17} />
              </span>
              <p className="text-[14px] font-semibold">Twitter</p>
            </div>
            <h4 className="ml-[2rem] text-[14px] font-normal">@nocode</h4>

            <div className="flex items-center gap-[1rem]">
              <span>
                <FaDiscord size={17} />
              </span>
              <p className="text-[14px] font-semibold">Discord</p>
            </div>
            <h4 className="ml-[2rem] text-[14px] font-normal">nocode</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
