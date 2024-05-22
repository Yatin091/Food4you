import React, { useState } from 'react';
import "./App.css";
import iphoneImage from "./images/iphone.png";
import leafImage from "./images/leaf.png";
import leafImage2 from "./images/leaf_2.png";
import spaghettiImage from "./images/spaghetti.png";
import tomato from "./images/tomato.png";
import pasta from "./images/pasta.png";
import place_your_image_here_dou_3 from "./images/place_your_image_here_dou_3.png";
import title_5 from "./images/title_5.png";
import subtitle from "./images/subtitle.png";
import this_monday_happy_hours from "./images/this_monday_happy_hours.png";
import _1_3 from "./images/1_1_3.png";
import place_your_logo_here_doub_2 from "./images/place_your_logo_here_doub_2.png";


const First =()=>{
  const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    return(
        <>
        <div className="group-1">
        <div className="design">
          <div className="l-constrained-3 group">
            <div className="col-5">
              <div className="shape"></div>
              <div className="rectangle"></div>
            </div>
            <div className="rectangle-holder">
            <img className="iphone" src={iphoneImage} alt="" width="29" height="53" />
            </div>
          </div>
        </div>
        <div className="image group">
          <div className="col-6">
            <img
              className="leaf"
              src={leafImage2}
              alt=""
              width="57"
              height="95"
            />
            <img
              className="spaghetti"
              src={spaghettiImage}
              alt=""
              width="168"
              height="297"
            />
          </div>
          <div className="wrapper-4">
            <img
              className="leaf-2"
              src={leafImage}
              alt=""
              width="83"
              height="109"
            />
            <img
              className="tomato"
              src={tomato}
              alt=""
              width="81"
              height="81"
            />
            <img
              className="pasta"
              src={pasta}  
              alt=""
              width="95"
              height="96"
            />
            <img
              className="place-your-image-here-double-click-to-edit"
              src={place_your_image_here_dou_3}
              alt=""
              width="567"
              height="567"
            />
          </div>
        </div>
        <div className="text group">
          <div className="col-17">
            <img
              className="title"
              src={title_5}
              alt="Are You Hungry?"
              width="369"
              height="66"
              title="Are You Hungry?"
            />
            <img
              className="subtitle"
              src={subtitle}
              alt="Don't Wait!"
              width="568"
              height="74"
              title="Don't Wait!"
            />
            <p className="body-text">Let's start to order food now</p>
            <div className="row-7 group">
              <img
                className="text-2"
                src={this_monday_happy_hours}
                alt="This Monday Happy Hours"
                width="147"
                height="39"
                title="This Monday Happy Hours"
              />
              <img
                className="text-3"
                src={_1_3}
                alt="1+1=3"
                width="126"
                height="44"
                title="1+1=3"
              />
            </div>
            <p className="text-4"><a href="">Order Now</a></p>
          </div>
          <p className="phone">
            <span className="text-style-2">Express Delivery</span>
            <br className="text-style" />
            <span className="text-style-2">1800 258 888</span>
          </p>
        </div>
        <nav className="nav">
        <ul className={`nav-list group ${menuVisible ? 'show' : ''}`}>
            <li>
              <p className="nav-item-1">
                <a href="#">Home</a>
              </p>
            </li>
            <li>
              <p className="nav-item-1-2">
                <a href="#m">Menu</a>
              </p>
            </li>
            <li>
              <p className="nav-item-1-3">
                <a href="#o">Our Story</a>
              </p>
            </li>
            <li>
              <p className="nav-item-1-4">
                <a href="#c">Contact Us</a>
              </p>
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
        </nav>
       
        <img
          className="place-your-logo-here-double-click-to-edit"
          src={place_your_logo_here_doub_2}
          alt=""
          width="251"
          height="63"
        />
      </div>

        </>
    )
}
export default First