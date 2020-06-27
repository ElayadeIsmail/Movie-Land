import React from "react";
import "./arrows.style.scss";

export const RightArrow = ({ onClick }) => {
  return <div className='right' onClick={onClick}></div>;
};
export const LeftArrow = ({ onClick }) => {
  return <div className='left' onClick={onClick}></div>;
};
