import React from "react";
import quoteBG from "../images/left-quote.png";

export default function Testimonial(props) {
  return (
    <div style={{ backgroundImage: quoteBG }} className="slider">
      <ul className="slides">
        <li>
          <img src="" alt="" />
          <div className="caption left-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <div className="caption left-align">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan. Here's our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <div className="caption left-align">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <div className="caption left-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div>
        </li>
      </ul>
      <ul className="indicators">
        <li className="indicator-item new-indicator testy1" />
        <li className="indicator-item new-indicator testy2" />
        <li className="indicator-item new-indicator testy3" />
        <li className="indicator-item new-indicator testy4" />
      </ul>
    </div>
  );
}
