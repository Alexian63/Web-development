import Link from "next/link";
import SortieCard from "../components/SortieCard";

export default function Sorties() {
  const sorties = [
    {
      titre: "Balade en forêt",
      description: "Une belle balade",
      date: "2025-05-12",
      debut: "14:00",
      fin: "17:00",
      lieu: "Forêt de Fontainebleau",
      adresse: "Route des Gorges",
      code_postal: "77300",
      image: "test.jpg",
    },
    {
      titre: "Randonnée en montagne",
      description: "Randonnée sportive",
      date: "2025-06-10",
      debut: "09:00",
      fin: "12:00",
      lieu: "Alpes",
      adresse: "Col de la Croix",
      code_postal: "73000",
      image: "sortie.jpg",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>Toutes les sorties</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {sorties.map((sortie) => (
          <Link
            key={sortie.titre}
            href={`/Sortie/${sortie.titre.replace(/\s+/g, "")}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <SortieCard sortie={sortie} />
          </Link>
        ))}
      </div>
    </div>
  );
}
