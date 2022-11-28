import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { MdPhoneInTalk, MdEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import EditIcon from "../../images/pngfind 1.svg";
import './Contact.css'

const Contact = () => {
  return (
    <div className="container contact_section">
      <div className="contact">
        <div className="contact_top">
          <h1>Contact</h1>
          <div className="contact_edit">
            <BsPlusLg />
            <img src={EditIcon} alt="" />
          </div>
              </div>
              
              <div className="contact_body">
                  <div className="contact_first">
                      <div className="contact_text">
                          <span><MdPhoneInTalk size={20}/></span><p>Phone</p>
                      </div>
                      <h4>+2349865755412</h4>

                      <div className="contact_text">
                          <span><MdEmail size={20}/></span><p>Email</p>
                      </div>
                      <h4>random@gmail.com</h4>
                  </div>
                  
                  <div className="contact_second">
                       <div className="contact_text">
                          <span><AiOutlineTwitter size={20}/></span><p>Twitter</p>
                      </div>
                      <h4>@nocode</h4>

                      <div className="contact_text">
                          <span><FaDiscord size={20}/></span><p>Discord</p>
                      </div>
                      <h4>nocode</h4>
                  </div>
              </div>
      </div>
    </div>
  );
};

export default Contact;
