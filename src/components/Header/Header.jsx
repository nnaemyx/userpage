import React, {useState} from "react";
// import "./Header.css";
import { profile } from "../../Data";
import MoonIcon from "../../images/moon 2.svg";
import { GoLocation } from "react-icons/go";
import Edit from "../Edit";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white lg:h-[470px] h-[355px] rounded-t-lg">
      <div className="bg-primary lg:h-[220px] h-[110px] lg:rounded-t-lg">
        {profile.map((items, index) => {
          return (
            <div key={index} className="lg:container px-4  flex justify-between">
              <div>
                <div className="flex ml-[-1rem]">
                  <img
                    src={items.image.type}
                    alt=""
                    className="lg:mt-[8rem] mt-[2rem] lg:w-[200px] w-[132px]"
                  />
                  <div className="lg:mt-[14.5rem] hidden lg:block">
                    <p className="px-[8px] pt-[2px] pb-[4px] rounded-full text-[12px] text-white bg-[#65ab66]">
                      Available for hire
                    </p>
                  </div>
                </div>

                <div className=" leading-2">
                  <div className=" flex gap-[1rem] items-center ">
                    <h1 className="lg:text-[22px] text-[16px] font-semibold">{items.name}</h1>
                    <div className="flex items-center gap-[0.2rem]">
                      <img src={MoonIcon} alt="" className='w-[10.88px]' />
                      <span className="lg:text-[16px] text-[11.6px]">away</span>
                    </div>
                  </div>
                  <p className="lg:text-[14px] text-[12px] mb-2 text-[#636161]">
                    {items.username}
                  </p>
                  <p className="text-[#636161] lg:text-[17px] text-[13px]">{items.software}</p>
                  <div className="profile_location mb-[15px] flex items-center gap-[.3rem]">
                    <span>
                      <GoLocation />
                    </span>
                    <p className="lg:text-[17px] text-[13px]">{items.location}</p>
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
                   <div className="lg:mt-[14.5rem] lg:hidden flex">
                    <p className="px-[8px] pt-[2px] pb-[4px] rounded-full text-[12px] text-white bg-[#65ab66]">
                      Available for hire
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:mt-[16rem] mt-[7.5rem] pr- lg:pr-0">
                <button onClick={() => setOpenModal(true)} className="px-[10px] border -z-1 border-black border-solid  rounded-full py-[5px] text-[11px] lg:text-[14px] bg-white">
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
