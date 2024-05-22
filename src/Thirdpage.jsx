import React from "react";
import "./App.css";
import sub_title_2 from "./images/sub_title_2.png";
import image_5 from "./images/image_5.jpg";
import image_6 from "./images/image_6.jpg";
import image_4 from "./images/image_4.jpg";
import image from "./images/image.jpg";
import image_2 from "./images/image_2.jpg";
import image_3 from "./images/image_3.jpg";
import title from "./images/title.png";

const Third =()=>{
    return(
        <>

<div className="l-constrained" id="o">
        <div className="group-3">
          <div className="text-6">
            <p className="title-4">Discover</p>
            <img
              className="sub-title-2"
              src={sub_title_2}
              alt="Upcoming Events"
              width="424"
              height="34"
              title="Upcoming Events"
            />
            <p className="body-text-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="image-3 group">
            <img
              className="image-4"
              src={image_5}
              alt=""
              width="404"
              height="351"
            />
            <img
              className="image-5"
              src={image_6}
              alt=""
              width="696"
              height="407"
            />
            <img
              className="image-6"
              src={image_4}
              alt=""
              width="404"
              height="351"
            />
          </div>
          <div className="design-3">
            <div className="dots group">
              <div className="ellipse"></div>
              <div className="ellipse-2"></div>
              <div className="ellipse-3"></div>
            </div>
          </div>
        </div>
        <div className="image-7">
          <img
            className="image-8"
            src={image}
            alt=""
            width="595"
            height="192"
          />
          <img
            className="image-9"
            src={image_2}
            alt=""
            width="595"
            height="192"
          />
          <img
            className="image-10"
            src={image_3}
            alt=""
            width="597"
            height="420"
          />
          <div className="text-7 group">
            <p className="body-text-6">
              <span className="text-style-5">Try it today</span>
              <br className="text-style-4" />
              <span className="text-style-7">Most</span>
              <br className="text-style-6" />
              <span className="text-style-9">Popular</span>
              <br className="text-style-8" />
              <span className="text-style-9">Pasta</span>
            </p>
            <div className="col-9">
              <p className="body-text-7">
                <span className="text-style-10">Try it today</span>
                <br />More fun
                <br />more taste
              </p>
              <p className="body-text-8">
                <span className="text-style-10">Try it today</span>
                <br />Fresh &amp; Chili
              </p>
            </div>
          </div>
        </div>
        <div className="group-5">
          <div className="text-8">
            <p className="sub-title-3">Reservation</p>
            <img
              className="title-5"
              src={title}
              alt="Book your table"
              width="551"
              height="41"
              title="Book your table"
            />
            <div className="row-5 match-height group">
              <div className="col-11">
                <input className="name" placeholder="Name" />
                <input className="date" placeholder="Date"/>
              </div>
              <div className="col-12">
                <input className="email" placeholder="Email"/>
                <input className="time"  placeholder="Time"/>
              </div>
            </div>
            <div className="row group">
              <input className="people" placeholder="People"/>
              <p className="text-9"><a href="">Find A Table</a></p>
            </div>
          </div>
          <div className="design-4 match-height group">
            <div className="col">
              <div className="rounded-rectangle"></div>
              <div className="rounded-rectangle-2"></div>
              <div className="rounded-rectangle-3"></div>
            </div>
            <div className="col-2">
              <div className="rounded-rectangle-4"></div>
              <div className="rounded-rectangle-5"></div>
              <div className="rounded-rectangle-6"></div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Third