import React from "react";
import "../styles/utils.module.css" ;

interface TextProps {
  text: string;
  fontSize?: string;
  textColor?: string;
  fontFamily?: string;
  fontWeight?: string;
  textAlign?: string;
  bgColor?: string;
  padding?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  margin?: string;
  marginX?: string;
  marginY?: string;
  borderRadius?: string;
  customClasses?: string;
}

const Text: React.FC<TextProps> = ({
  text = "",
  fontSize = "text-base", // Défaut: Taille de texte base
  textColor = "text-white", // Défaut: Couleur blanche
  fontFamily = "font-sans", // Défaut: Sans-serif
  fontWeight = "font-normal", // Défaut: Poids normal
  textAlign = "justify", // Défaut: Aligné à gauche
  bgColor = "", // Défaut: Pas de fond
  padding = "", // Défaut: Pas de padding
  marginTop = "",
  marginRight = "",
  marginBottom = "",
  marginLeft = "",
  margin = "",
  marginX = "",
  marginY = "",
  borderRadius = "", // Défaut: Pas de coins arrondis
  customClasses = "", // Classes personnalisées supplémentaires
}) => {
  return (
    <p
      className={`
        ${fontSize} 
        ${textColor} 
        ${fontFamily} 
        ${fontWeight} 
        ${textAlign} 
        ${bgColor} 
        ${padding}
        ${marginTop ? `mt-${marginTop}` : ""} 
        ${marginRight ? `mr-${marginRight}` : ""} 
        ${marginBottom ? `mb-${marginBottom}` : ""} 
        ${marginLeft ? `ml-${marginLeft}` : ""} 
        ${margin ? `m-${margin}` : ""} 
        ${marginX ? `mx-${marginX}` : ""} 
        ${marginY ? `my-${marginY}` : ""} 
        ${borderRadius ? `rounded-${borderRadius}` : ""} 
        ${customClasses}
      `}
    >
      {text}
    </p>
  );
};

export default Text;
