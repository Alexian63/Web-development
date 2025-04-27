// components/SortieCard.js
import { useState } from "react";

export default function SortieCard({ sortie }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={sortie.image}
        alt={sortie.titre}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: hover ? "blur(3px) brightness(0.7)" : "none",
          transition: "0.3s ease",
        }}
      />
      <h3 style={{ position: "absolute", top: 10, left: 10, color: "white", fontSize: "18px", textShadow: "1px 1px 3px black" }}>
        {sortie.titre}
      </h3>
      {hover && (
        <div style={{ position: "absolute", top: "40px", left: "10px", color: "white" }}>
          <p>📍 {sortie.lieu}</p>
          <p>📅 {sortie.date}</p>
          <p>⏰ {sortie.debut} - {sortie.fin}</p>
        </div>
      )}
    </div>
  );
}
