import React, {useState} from "react";
// import "./Header.css";
import { profile } from "../../Data";
import MoonIcon from "../../images/moon 2.svg";
import { GoLocation } from "react-icons/go";
import Edit from "../Edit";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white h-[470px] rounded-md">
      <div className="bg-primary h-[220px] rounded-md">
        {profile.map((items, index) => {
          return (
            <div key={index} className="container flex justify-between">
              <div>
                <div className="flex ml-[-2rem]">
                  <img
                    src={items.image.type}
                    width={200}
                    alt=""
                    className="mt-[8rem]"
                  />
                  <div className="mt-[14.5rem]">
                    <p className="px-[8px] pt-[2px] pb-[4px] rounded-full text-[12px] text-white bg-[#65ab66]">
                      Available for hire
                    </p>
                  </div>
                </div>

                <div className=" leading-7">
                  <div className=" flex gap-[1rem] items-center ">
                    <h1 className="text-[22px] font-semibold">{items.name}</h1>
                    <div className="flex items-center gap-[0.2rem]">
                      <img src={MoonIcon} alt="" />
                      <span className="text-[16px]">away</span>
                    </div>
                  </div>
                  <p className="profile_username text-[14px] text-[#636161]">
                    {items.username}
                  </p>
                  <p className="text-[#636161]">{items.software}</p>
                  <div className="profile_location mb-[5px] flex items-center gap-[.3rem]">
                    <span>
                      <GoLocation />
                    </span>
                    <p>{items.location}</p>
                  </div>
                  <div className="profile_follow flex gap-1 text-[15px]">
                    <p>
                      {" "}
                      <span className="font-semibold">4K</span> Followers
                    </p>
                    <p>
                      {" "}
                      <span className="font-semibold">1K</span> Following
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[16rem]">
                <button onClick={() => setOpenModal(true)} className="px-[10px] border-2 -z-1 border-black border-solid rounded-full py-[5px] text-[14px] bg-white">
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
