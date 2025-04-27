// pages/api/sortie/[slug].js

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
  
  export default function handler(req, res) {
    const { slug } = req.query;
    const sortie = sorties.find(
      (s) => s.titre.replace(/\s+/g, "").toLowerCase() === slug.toLowerCase()
    );
  
    if (!sortie) {
      return res.status(404).json({ message: "Sortie non trouvée" });
    }
  
    res.status(200).json(sortie);
  }
  