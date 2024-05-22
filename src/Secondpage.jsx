import React from "react";
import "./App.css";
import place_your_image_here_dou from "./images/place_your_image_here_dou.png";
import bread from "./images/bread.png";
import place_your_image_here_dou_2 from "./images/place_your_image_here_dou_2.png";
import sub_title_3 from "./images/sub_title_3.png";

const Second =()=>{
    return(
        <>
<div className="group-2" id="m">
        <div className="design-2">
          <div className="rectangle-2"></div>
          <div className="row-2 group">
            <div className="rectangle-3"></div>
            <div className="rectangle-4"></div>
            <div className="rectangle-5"></div>
          </div>
        </div>
        <div className="image-2 group">
          <img
            className="place-your-image-here-double-click-to-edit-2"
            src={place_your_image_here_dou}
            alt=""
            width="351"
            height="353"
          />
          <img
            className="bread"
            src={bread}
            alt=""
            width="372"
            height="353"
          />
          <img
            className="place-your-image-here-double-click-to-edit-3"
            src={place_your_image_here_dou_2}
            alt=""
            width="359"
            height="357"
          />
        </div>
        <div className="text-5 group">
          <img
            className="sub-title"
            src={sub_title_3}
            alt="Choose & Enjoy"
            width="466"
            height="40"
            title="Choose & Enjoy"
          />
          <p className="body-text-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className="row-6 match-height group">
            <div className="col-13">
              <p className="title-2">Lorem ipsum dolor</p>
              <p className="body-text-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <p className="link"><a href="">Order Now</a></p>
            </div>
            <div className="col-14">
              <p className="title-3">Lorem ipsum dolor</p>
              <p className="body-text-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <p className="link-2"><a href="">Order Now</a></p>
            </div>
            <div className="col-15">
              <p className="title-copy">Lorem ipsum dolor</p>
              <p className="body-text-copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <p className="link-copy"><a href="">Order Now</a></p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Second