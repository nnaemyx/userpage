import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { HiMoon } from "react-icons/hi";
import { MdDoNotDisturbOn } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import closeicon from ".././images/closeicon.svg";
import cameraicon from ".././images/cameraicon.svg";
import profileimage from ".././images/Profile Pic Display (1).svg";
import MoonIcon from ".././images/moon 2.svg";
import "./Edit.css";

const Edit = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!open) return null;
  return (
    <div className="bg-black/54 top-[0.01rem] left-[0.01rem] overflow-auto fixed w-[100%] h-[100%] ">
      <div className="rounded-md fixed top-[10%] max-w-[800px] overflow-y-auto max-h-[100%]  lg:left-[18%] left-[5%] h-[983px] lg:w-[798px] w-[310px]  bg-white">
        <div className="flex lg:container px-4  mt-4 justify-between">
          <div className="flex gap-2 items-center">
            <GrFormClose onClick={onClose} size={25} />
            <h1 className="font-semibold lg:text-[18px]">Edit Profile</h1>
          </div>
          <button className="border bg-black text-white text-[10px] lg:text-[15px] lg:px-4 px-2 py-[0.05rem] lg:py-1 rounded-full">
            Save
          </button>
        </div>
        <div className="lg:h-[238px] h-[117px] bg-primary mt-4">
          <div className="flex gap-2 lg:py-[5.5rem] py-[3.3rem] justify-center">
            <img src={cameraicon} alt="" className="w-[30px] lg:w-[50px]" />
            <img src={closeicon} alt="" className="w-[30px] lg:w-[50px]" />
          </div>
          <div className="flex justify-between">
            <div className="-mt-[5rem] flex relative">
              <img
                src={profileimage}
                alt=""
                className="lg:w-[180px] w-[100px]"
              />
              <img
                src={cameraicon}
                alt=""
                className="absolute lg:top-[4rem] top-[1.5rem] left-[2rem] w-[35px] lg:w-[45px] lg:left-[4.1rem]"
              />
              <div className="lg:mt-[7rem] mt-[4rem]">
                <button className="px-[8px] pt-[2px] pb-[4px] rounded-full text-[10px] lg:text-[12px] text-white bg-[#65ab66]">
                  Available for hire
                </button>
              </div>
            </div>

            <div className="flex items-center lg:pr-[3rem] lg:-mt-0  -mt-[.1rem] pr-[1rem] lg:gap-[0.2rem]">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className=" text-gray-800 font-medium lg:text-[14px] text-[12px]  lg:py-2 px-1 py-1 lg:px-4 rounded-lg flex items-center"
                >
                  Set status
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute right-0 lg:text-[14px] text-[12px] z-10 w-[200%] bg-[#002633] rounded-lg py-2">
                    <a
                      href="#f"
                      className="flex gap-2 items-center lg:text-[14px] text-[12px]  px-4 py-2 text-white hover:bg-gray-200 hover:text-[black]"
                    >
                      <GoPrimitiveDot className="text-[green]" />
                      Online
                    </a>
                    <a
                      href="#f"
                      className="flex gap-2 items-center lg:text-[14px] text-[12px]  px-4 py-2 text-white hover:bg-gray-200 hover:text-[black]"
                    >
                      <HiMoon className="text-[#ffcc00]" />
                      Idle
                    </a>
                    <a
                      href="#f"
                      className="flex gap-2 items-center px-4 py-2 text-white hover:bg-gray-200 hover:text-[black]"
                    >
                      <MdDoNotDisturbOn className="text-[red]" />
                      <div className="">
                        Do not disturb
                        <p className="lg:text-[10px] text-[8px]">
                          You will not receive any desktop notifications
                        </p>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <form
          action=""
          className="lg:mt-[7rem] mt-[4rem] mb-8 px-4 lg:container"
        >
          <div className="">
            <label className="font-semibold text-[13px] lg:text-[15px]">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
          <div className="">
            <label className="font-semibold text-[13px] lg:text-[15px]">
              Title
            </label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
          <div className="">
            <label className="font-semibold text-[13px] lg:text-[15px]">
              Subtitle
            </label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
          <div className="lg:hidden block">
            <label className="font-semibold text-[13px] lg:text-[15px]">
              Location
            </label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
          <div className="lg:hidden block">
            <label className="font-semibold text-[13px] lg:text-[15px]">
              Timezone
            </label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>

          <div className="hidden gap-[10rem] lg:flex">
            <div className="">
              <label className="font-semibold text-[13px] lg:text-[15px]">
                Location
              </label>
              <input
                type="text"
                name="name"
                placeholder=""
                className="w-[150%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
                id=""
              />
            </div>

            <div className="">
              <label className="font-semibold text-[13px] lg:text-[15px]">
                Timezone
              </label>
              <input
                type="text"
                name="name"
                placeholder=""
                className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
                id=""
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="">
              <label className="font-semibold text-[13px] lg:text-[15px]">
                Salary
              </label>
              <input
                type="text"
                name="name"
                placeholder=""
                className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
                id=""
              />
            </div>
            <hr className="border lg:w-[5%] w-[20%] text-[#6B6868]/50 bg-[#6B6868]/50 mt-3" />
            <div className="mt-6">
              <input
                type="text"
                name="name"
                placeholder=""
                className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
                id=""
              />
            </div>

            <div className="mt-6">
              <input
                type="text"
                name="name"
                placeholder=""
                className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
                id=""
              />
            </div>

            <div className="mt-6">
              <input
                type="text"
                name="name"
                placeholder=""
                className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
                id=""
              />
            </div>
          </div>
        </form>

        <div className="mb-[10rem] text-center lg:container px-4 leading-9">
          <div className=" mb-[10rem] lg:container px-4 leading-9 items-center">
            <a href="#f" className="flex  items-center gap-2">
              <VscSettingsGear className="text-[black]" />
              <h1 className="text-[black] font-semibold">Settings</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
