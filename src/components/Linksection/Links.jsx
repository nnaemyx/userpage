import React from "react";
import { Link } from "react-router-dom";
import './Link.css'

const Links = () => {
  return (
    <div className="link_section">
      <div className="link">
        <Link to="/backend">
          <p>backend</p>
        </Link>
        <Link to="/">
          <p>frontend</p>
        </Link>
      </div>
    </div>
  );
};

export default Links;
