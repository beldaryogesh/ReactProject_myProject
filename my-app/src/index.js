import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";


ReactDOM.render(
  <>
    <h1 className="heading_style"> My Top 5 PROJECT </h1>
    {Sdata.map(function pCard(value) {
      return (
        <Card
        key = {value.id}
          imgsrc={value.imgsrc}
          title={value.title}
          projectname={value.projectname}
          link={value.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
