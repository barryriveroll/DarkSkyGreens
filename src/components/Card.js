import React from "react";

export default function Card(props) {
  return (
    <div
      style={{
        background: props.bgOverlay
      }}
      className="contentCard col s12 l4 m12"
    >
      <div>
        <img
          style={{ filter: "drop-shadow(1px 1px 1px black)" }}
          src={props.icon}
          alt="icon"
        />
      </div>
      <h3 style={props.light ? { color: "#1d1b19" } : {}}>
        {props.headerText}
      </h3>
      <hr style={props.light ? {} : { borderColor: "whitesmoke" }} />
      <p style={props.light ? { color: "#1d1b19" } : {}}>
        Text content goes here. Text content goes here. Text content goes here.
        Text content goes here. Text content goes here. Text content goes here.
        Text content goes here. Text content goes here. Text content goes here.{" "}
      </p>
    </div>
  );
}
