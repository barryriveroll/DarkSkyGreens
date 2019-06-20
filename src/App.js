import React from "react";

import "./App.scss";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";

import FlagstaffImg from "./images/city.jpg";
import Flagstaff2Img from "./images/flagstaff.jpg";
import SunflowersImg from "./images/sunflowers.jpg";
import GreensImg from "./images/greens.jpg";
import GreensIcon from "./images/plant.png";
import ShovelIcon from "./images/shovel.png";
import MountainIcon from "./images/mountain.png";
import ContactIcon from "./images/contact.png";
import PowerIcon from "./images/salute.png";

function App() {
  return (
    <>
      <header
        style={{
          height: "100vh",
          background: `linear-gradient(#2a22407a,#2a22407a), url(${Flagstaff2Img})`,
          backgroundSize: "cover"
        }}
      >
        <div className="logoDiv">
          <h1>DARK SKY GREENS</h1>
          <hr />
          <p>
            Dark Sky Greens is a company for something that does something and
            something else something something text goes here.
          </p>
        </div>
      </header>
      <section className="row">
        <Card
          bgImage={FlagstaffImg}
          icon={GreensIcon}
          light
          bgOverlay="#C1BDB3"
          headerText="Microgreens"
        />
        <Card
          bgImage={SunflowersImg}
          icon={ShovelIcon}
          light
          bgOverlay="#63A375"
          headerText="About Us"
        />
        <Card
          bgImage={GreensImg}
          icon={MountainIcon}
          bgOverlay="#5F5B6B"
          headerText="Flagstaff-Grown"
        />
      </section>
      <section
        style={{ height: 280, marginTop: "200px" }}
        className="container"
      >
        <h2 className="center">Testimonials</h2>
        <Testimonial />
      </section>

      <section
        className="row"
        style={{
          marginTop: 300,
          marginBottom: 0
        }}
      >
        <div
          style={{ background: "rgb(99, 163, 117)", height: 569 }}
          className="col m12 s12 l6 contactDiv"
        >
          <div>
            <img
              style={{ filter: "drop-shadow(1px 1px 1px black)" }}
              src={PowerIcon}
              alt="icon"
            />
          </div>
          <h2 style={{ marginTop: 0 }} className="center">
            Contact Us
          </h2>
          <hr />
          <p>
            Contact text goes here. Contact text goes here. Contact text goes
            here. Contact text goes here. Contact text goes here. Contact text
            goes here.{" "}
          </p>
        </div>
        <div
          style={{ background: "rgb(230, 206, 101)", height: 569 }}
          className="contactDiv col m12 s12 l6"
        >
          <div>
            <img
              style={{ filter: "drop-shadow(1px 1px 1px black)" }}
              src={ContactIcon}
              alt="icon"
            />
          </div>
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLScGwG8a4QzTbTUuSHkVGc8YYgmMSh85bRxq1XZ9ZBietQkq-g/formResponse?embedded=true"
            className="col s12"
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="entry.1516643882"
                  id="fullName"
                  type="text"
                  className="validate"
                />
                <label htmlFor="fullName">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="entry.548242525"
                  id="email"
                  type="email"
                  className="validate"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  name="entry.1330284540"
                  id="comments"
                  className="materialize-textarea commentBox"
                />
                <label htmlFor="comments">Comments</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </section>
      <footer class="page-footer">
        <div className="container center">
          <div>
            <img
              style={{ width: 40, height: "auto" }}
              src={GreensIcon}
              alt="Greens"
            />
          </div>
          <div className="center">
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              Pixel perfect
            </a>{" "}
            ,{" "}
            <a href="https://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            , and{" "}
            <a href="https://www.flaticon.com/authors/vaadin" title="Vaadin">
              Vaadin
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="container"
          >
            © {new Date().getFullYear()} Dark Sky Greens
            <div>
              Designed, developed, deployed by{" "}
              <a target="_blank" href="https://monstertooth.tech">
                Monster Tooth
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
