import React from "react";
import { files } from "../../Data";
import "./File.css";

const File = () => {
  return (
    <div className="container file_section">
      <div className="file">
        <div className="file_top">
          <h1>Files</h1>
          <div>
            <button>Upload</button>
          </div>
        </div>
        <div className="file_box">
          {files.map((items, index) => {
            return (
              <div className="file_box1" key={index}>
                <div className="file_type">
                  <p className="file_name">{items.name}</p>
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
