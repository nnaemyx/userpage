import React from "react";
import { GrFormClose } from "react-icons/gr";
import closeicon from ".././images/closeicon.svg";
import cameraicon from ".././images/cameraicon.svg";
import profileimage from ".././images/Profile Pic Display (1).svg";
import MoonIcon from ".././images/moon 2.svg";

const Edit = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="bg-black/54 top-[0.01rem] left-[0.01rem] overflow-auto fixed w-[100%] h-[100%] ">
        <div className="rounded-md fixed top-[10%] max-w-[800px] overflow-y-auto max-h-[100%]  lg:left-[18%] left-[5%] h-[983px] lg:w-[798px] w-[310px]  bg-white">
        <div className="flex container mt-4 justify-between">
          <div className="flex gap-2 items-center">
            <GrFormClose onClick={onClose} size={25} />
            <h1 className="font-semibold text-[18px]">Edit Profile</h1>
          </div>
          <button className="border bg-black text-white text-[15px] px-4 py-1 rounded-full">
            Save
          </button>
        </div>
        <div className="h-[238px] bg-primary mt-4">
          <div className="flex gap-2 py-[5.5rem] justify-center">
            <img src={cameraicon} alt="" />
            <img src={closeicon} alt="" />
          </div>
          <div className="flex justify-between">
            <div className="-mt-[5rem] flex relative">
              <img src={profileimage} alt="" width={180} />
              <img
                src={cameraicon}
                alt=""
                width={45}
                className="absolute top-[4rem] left-[4.1rem]"
              />
              <div className="mt-[7rem]">
                <button className="px-[8px] pt-[2px] pb-[4px] rounded-full text-[12px] text-white bg-[#65ab66]">
                  Available for hire
                </button>
              </div>
            </div>

            <div className="flex items-center pr-[3rem] gap-[0.2rem]">
              <img src={MoonIcon} alt="" />
              <span className="text-[16px]">away</span>
            </div>
          </div>
        </div>

        <form action="" className="mt-[7rem] container">
          <div className="">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
          <div className="">
            <label className="font-semibold">Title</label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
          <div className="">
            <label className="font-semibold">Subtitle</label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
