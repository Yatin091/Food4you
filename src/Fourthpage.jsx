import React from "react";
import place_your_logo_here_doub from "./images/Place Your Logo Here (Double Click to Edit).png";
import location_icon from "./images/location_icon.png"
import email from "./images/email.png"
import facebook from "./images/facebook.png"
import whatsapp from "./images/whatsapp.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"
import "./App.css";

const Fourth =()=>{
    return(
        <>
<div className="design-5" id="c">
        <div className="l-constrained-2">
          <img
            className="place-your-logo-here-double-click-to-edit-2"
            src={place_your_logo_here_doub}
            alt=""
            width="309"
            height="77"
          />
          <div className="text-10 group">
            <div className="col-7">
              <p className="body-text-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viver ra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p className="text-11">
                © Company Name <span className="text-style-11">2020</span>. All
                rights reserved.
              </p>
            </div>
            <div className="col-10">
              <div className="row-3 group">
                <img
                  className="location-icon"
                  src={location_icon}
                  alt=""
                  width="31"
                  height="35"
                />
                <p className="address">Main Road, Building Name, Country</p>
              </div>
              <div className="row-4 group">
                <img
                  className="email-2"
                  src={email}
                  alt=""
                  width="29"
                  height="23"
                />
                <p className="email-3">info@companyname.com</p>
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="icon group">
              <img
                src={instagram}
                alt=""
                width="29"
                height="29"
              />
              <img
                src={facebook}
                alt=""
                width="29"
                height="29"
              />
              <img
                src={twitter}
                alt=""
                width="29"
                height="29"
              />
              <img
                src={whatsapp}
                alt=""
                width="29"
                height="29"
              />
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Fourth