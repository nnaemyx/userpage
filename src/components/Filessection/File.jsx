import React from "react";
import { files } from "../../Data";
// import "./File.css";

const File = () => {
  return (
    <div className="lg:container bg-white rounded-md mt-[2rem] file_section">
      <div className="py-[2rem] h-[140px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px] font-semibold">Files</h1>
          <div>
            <button className="px-[15px] py-[5px] border rounded-full text-[14px] bg-primary text-white">Upload</button>
          </div>
        </div>
        <div className="file_box flex lg:flex-row overflow-x-auto max-w-[100%] gap-[1rem]">
          {files.map((items, index) => {
            return (
              <div className="file_box1 flex items-center  justify-between border border-solid border-[#6B6868]/50 text-[13px] mt-[.5rem] w-[40%] px-[1rem] rounded-[10px] leading-[1.4rem]" key={index}>
                <div className="file_type">
                  <p className="font-semibold">{items.name}</p>
                  <p>{items.docs}</p>
                </div>
                <img src={items.icon.type} alt="aa" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default File;
