import React from "react";
import "../styles/utils.module.css";

/*
Composant qui permet de faire des listes 
C'est presque pareil que le composant texte, mais 
*/

const ListItem = ({
  text = "",
  fontSize = "text-base", // Défaut: Taille de texte base
  textColor = "text-white", // Défaut: Couleur blanche
  fontFamily = "nunito", // Défaut: Sans-serif
  fontWeight = "font-normal", // Défaut: Poids normal
  textAlign = "justify", // Défaut: Aligné à gauche
  bgColor = "white", // Défaut: Pas de fond
  padding = "", // Défaut: Pas de padding
  marginTop = "",
  marginRight = "",
  marginBottom = "",
  marginLeft = "",
  margin = "",
  marginX = "",
  marginY = "",
  borderRadius = "", // Défaut: Pas de coins arrondis
}) => {
  return (
    <li
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
        `}
    >
      {text}
    </li>
  );
};

export default ListItem;



