import React from "react";
import "./Headings.scss";

export const Heading = ({ title }) => <h1 className="heading">{title}</h1>;

export const SubHeading = ({ title }) => (
  <h4 className="subHeading">{title}</h4>
);
