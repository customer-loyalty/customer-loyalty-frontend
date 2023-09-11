/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Button.module.css";

export default function Button({
  img,
  hoverImg,
  style,
  hoverStyle,
  text,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <button
      style={isHovered ? hoverStyle || style : style}
      className={styles.button}
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <img src={isHovered ? hoverImg || img : img} alt="добавить клиента" />
      {text}
    </button>
  );
}
