import React, { useState } from "react";
import "./Header.css";
import { profile } from "../../Data";
import { MdDoNotDisturbOn } from "react-icons/md";
import { HiMoon } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import { GoLocation } from "react-icons/go";
import Edit from "../Edit";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white lg:h-[470px] h-[355px] rounded-t-lg">
      <div className="bg-primary lg:h-[220px] h-[110px] lg:rounded-t-lg">
        {profile.map((items, index) => {
          return (
            <div
              key={index}
              className="lg:container px-4  flex justify-between"
            >
              <div>
                <div className="flex ml-[-1rem]">
                  <img
                    src={items.image.type}
                    alt=""
                    className="lg:mt-[8rem]  mt-[2rem] lg:w-[200px] w-[132px]"
                  />
                  <div className="lg:mt-[14.5rem] hidden lg:flex lg:gap-4 items-center">
                    <button
                      className={`${
                        isAvailable ? "bg-red-700" : "bg-green-700"
                      } px-[8px] pt-[2px] pb-[4px] rounded-full text-[12px] text-white bg-[#65ab66]`} 
                    >
                      {isAvailable ? " Not Available for hire" : "Available for hire"}
                    </button>
                    <input type="checkbox" id="switch" onClick={() => setIsAvailable(!isAvailable)} class="checkbox" />
                    <label for="switch" class="toggle"></label>
                  </div>
                </div>

                <div className=" leading-2">
                  <div className=" flex gap-[1rem] items-center ">
                    <h1 className="lg:text-[22px] text-[16px] font-semibold">
                      {items.name}
                    </h1>
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
                  <p className="lg:text-[14px] text-[12px] mb-2 text-[#636161]">
                    {items.username}
                  </p>
                  <p className="text-[#636161] lg:text-[17px] text-[13px]">
                    {items.software}
                  </p>
                  <div className="profile_location mb-[15px] flex items-center gap-[.3rem]">
                    <span>
                      <GoLocation />
                    </span>
                    <p className="lg:text-[17px] text-[13px]">
                      {items.location}
                    </p>
                  </div>
                  <div className="profile_follow flex gap-1 lg:text-[17px] text-[13px] mb-4">
                    <p>
                      {" "}
                      <span className="font-semibold">4K</span> Followers
                    </p>
                    <p>
                      {" "}
                      <span className="font-semibold">1K</span> Following
                    </p>
                  </div>
                  <div className="lg:mt-[14.5rem] lg:hidden flex gap-4">
                    <button
                      className={`${
                        isAvailable ? "bg-red-700" : "bg-green-700"
                      } px-[8px] pt-[2px] pb-[4px] rounded-full text-[12px] text-white bg-[#65ab66]`} 
                    >
                      {isAvailable ? " Not Available for hire" : "Available for hire"}
                    </button>
                    <input type="checkbox" id="switch" onClick={() => setIsAvailable(!isAvailable)} class="checkbox" />
                    <label for="switch" class="toggle"></label>
                  </div>
                </div>
              </div>

              <div className="lg:mt-[16rem] mt-[7.5rem] pr- lg:pr-0">
                <button
                  onClick={() => setOpenModal(true)}
                  className="px-[10px] border -z-1 border-black border-solid  rounded-full py-[5px] text-[11px] lg:text-[14px] bg-white"
                >
                  Edit Profile
                </button>
                <Edit open={openModal} onClose={() => setOpenModal(false)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
