import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slider1 from "E:/Ecommerce_Artisians/Ecommerce_artisians/client/src/components/headers/icon/slider5.jpg";
import slider2 from "E:/Ecommerce_Artisians/Ecommerce_artisians/client/src/components/headers/icon/slider2.jpg";
import slider3 from "E:/Ecommerce_Artisians/Ecommerce_artisians/client/src/components/headers/icon/slider3.jpg";
import slider4 from "E:/Ecommerce_Artisians/Ecommerce_artisians/client/src/components/headers/icon/slider4.jpg";
import slider6 from "E:/Ecommerce_Artisians/Ecommerce_artisians/client/src/components/headers/icon/slider6.jpg";

const Slider = () => {
  return (
    <>
      <br />
      <Carousel>
        <div>
          <img src={slider1} />
          <p className="legend">ZERO DEFECT.!! ZERO EFFECT.....</p>
        </div>
        <div>
          <img src={slider2} />
          <p className="legend">VOCAL FOR LOCAL.......</p>
        </div>
        <div>
          <img src={slider3} />
          <p className="legend">SATISFACTION IS A RATING. LOYALTY IS A BRAND</p>
        </div>
        <div>
          <img src={slider4} />
          <p className="legend">
            QUALITY IS REMEMBERED LONG AFTER THE PRICE IS FORGOTTEN!!!!!
          </p>
        </div>
        <div>
          <img src={slider6} />
          <p className="legend">
            I INVITE YOU ALL TO PARTICIPATE IN MAKE IN INDIA....
          </p>
        </div>
      </Carousel>
    </>
  );
};
export default Slider;
