/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Button.module.css";

export default function Button({ img, hoverImg, style, hoverStyle, text }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      {isHovered ? (
        <button
          style={hoverStyle || style}
          className={styles.button}
          type="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={hoverImg || img} alt="добавить клиента" />
          {text}
        </button>
      ) : (
        <button
          style={style}
          className={styles.button}
          type="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={img} alt="добавить клиента" />
          {text}
        </button>
      )}
    </div>
  );
}
