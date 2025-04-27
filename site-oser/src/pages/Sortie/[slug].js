// pages/Sortie/[slug].js
import "../../styles/styles.css";
import "../../styles/polices.css";
import Banner from "../../components/Banner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SortiePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [sortie, setSortie] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`/api/sortie/${slug}`)
        .then((res) => res.json())
        .then((data) => setSortie(data));
    }
  }, [slug]);

  if (!sortie) return <p style={{ textAlign: "center", marginTop: "100px" }}>Chargement...</p>;
  return (
    <div style={{ maxWidth: "1000px", margin: "60px auto", padding: "20px" }}>
      {/* Titre */}
      <h1 style={{
        textAlign: "center",
        color: "#0070f3",
        fontWeight: "bold",
        fontSize: "36px",
        marginBottom: "20px"
      }}>
        {sortie.titre}
      </h1>
      <div className="section">
        <div className="text-container">
          <h2 className="section-title raleway">Description</h2>
          <h3 className="subtitle raleway">
          {sortie.description}
          </h3>
        </div>
        <div className="image-container">
          <img src="/test.jpg" alt="Notre mission" />
        </div>
      </div>

<Banner
        title={
          <>
            <span className="highlight raleway">Informations de la sortie</span>
          </>
        }
        text={
          <ul>
            <li>
              <span className="highlight nunito">📅 Date : </span>
              <span className="highlight2 nunito">
              {sortie.date}
              </span>
            </li>
            <li>
              <span className="highlight nunito">⏰ Horaires : </span>
              <span className="highlight2 nunito">
              {sortie.debut} - {sortie.fin}
              </span>
            </li>
            <li>
              <span className="highlight nunito">📍 Lieu : </span>
              <span className="highlight2 nunito">
              {sortie.lieu}, {sortie.adresse}, {sortie.code_postal}
              </span>
            </li>
            </ul>
        }
      />
      </div>
  );
}
