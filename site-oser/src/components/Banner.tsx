import React from "react";
import "./Banner.css"; // Import du fichier CSS
import "../styles/utils.module.css";

const Banner = ({
  backgroundColor = "#807ca4",
  padding = "20px",
  color = "white",
  title = "",
  titleAlign = "left",
  titleColor = "",
  fontSizeTitle = "24px",
  fontWeightTitle = "1000",
  text = "",
  textAlign = "left",
  fontSizeText = "16px",
  fontWeightText = "normal",
}) => {
  return (
    <div className="banner"  style={{ backgroundColor, padding, color }}>
      <h1
        className="banner-title"
        style={{
          fontSize: fontSizeTitle, // Modification ici
          fontWeight: fontWeightTitle, // Modification ici
          textAlign: titleAlign, // Modification ici
          color: titleColor,
        }}
      >
        {title}
      </h1>
      <div
        className="banner-text"
        style={{
          fontSize: fontSizeText, // Modification ici
          fontWeight: fontWeightText, // Modification ici
          textAlign: textAlign, // Modification ici
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Banner;
