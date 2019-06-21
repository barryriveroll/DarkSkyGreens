import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import "./Navigation.css";

export default class Navigation extends Component {
  state = {
    current: [true, false, false, false]
  };

  handleClick = event => {
    const newCurrent = [false, false, false, false];
    newCurrent[event.target.id] = true;
    this.setState({ current: newCurrent });
  };

  render() {
    return (
      <div class="dotstyle dotstyle-fillup navdiv">
        <ul>
          <Scrollspy
            items={["home", "about", "testimonial", "contact"]}
            currentClassName="current"
          >
            <li
              onClick={this.handleClick}
              className={this.state.current[0] ? "current" : ""}
            >
              <a class=" tooltipped" data-tooltip="Home" id="0" href="#home">
                Home
              </a>
            </li>
            <li
              onClick={this.handleClick}
              className={this.state.current[1] ? "current" : ""}
            >
              <a class=" tooltipped" data-tooltip="About" id="1" href="#about">
                About
              </a>
            </li>
            <li
              onClick={this.handleClick}
              className={this.state.current[2] ? "current" : ""}
            >
              <a
                class=" tooltipped"
                data-tooltip="Testimonial"
                id="2"
                href="#testimonial"
              >
                Testimonial
              </a>
            </li>
            <li
              onClick={this.handleClick}
              class={this.state.current[3] ? "current" : ""}
            >
              <a
                class=" tooltipped"
                data-tooltip="Contact"
                id="3"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </Scrollspy>
        </ul>
      </div>
    );
  }
}
