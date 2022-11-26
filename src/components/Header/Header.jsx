import React from "react";
import "./Header.css";
import { profile } from "../../Data";
import MoonIcon from "../../images/moon 2.svg";
import { GoLocation } from "react-icons/go";

const Header = () => {
  return (
    <div className="header_section">
      <div className="header">
        {profile.map((items, index) => {
          return (
            <div key={index} className="profile_section container">
              <div className="profile_flex">
                <div className="profile_img">
                  <img src={items.image.type} width={200} alt="" />
                  <div className="profile_text">
                    <p>Available for hire</p>
                  </div>
                </div>

                <div className="profile_left">
                  <div className="profile_name">
                    <h1>{items.name}</h1>
                    <div className="profile_icon">
                      <img src={MoonIcon} alt="" />
                      <span>away</span>
                    </div>
                  </div>
                  <p className="profile_username">{items.username}</p>
                  <p>{items.software}</p>
                  <div className="profile_location">
                    <span>
                      <GoLocation />
                    </span>
                    <p>{items.location}</p>
                  </div>
                  <div className="profile_follow">
                    <p> <span>4K</span>  Followers</p>
                    <p> <span>1K</span>  Following</p>
                  </div>
                  <button>More</button>
                </div>
              </div>

              <div className="profile_edit">
                <button>Edit Profile</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
