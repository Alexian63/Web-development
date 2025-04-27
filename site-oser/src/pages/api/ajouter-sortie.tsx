import type { NextApiRequest, NextApiResponse } from "next";
import connection from "../../../backend/db"; // Utiliser le pool de connexions

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      titre,
      date,
      heuredebut,
      heurefin,
      lieu,
      adresse,
      codepostal,
      description,
      photo,
    } = req.body;

    // Validation des données
    if (
      !titre ||
      !date ||
      !heuredebut ||
      !heurefin ||
      !lieu ||
      !adresse ||
      !codepostal ||
      !description
    ) {
      return res
        .status(400)
        .json({ error: "Tous les champs obligatoires doivent être remplis." });
    }

    try {
      // Requête SQL pour insérer une nouvelle sortie
      const query = `
        INSERT INTO sorties (
          titre,
          date,
          heuredebut,
          heurefin,
          lieu,
          adresse,
          codepostal,
          description,
          photo
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        titre,
        date,
        heuredebut,
        heurefin,
        lieu,
        adresse,
        codepostal,
        description,
        photo || null, // Si aucune photo n'est fournie, insérer `null`
      ];

      // Exécution de la requête SQL
      connection.query(query, values, (err, results) => {
        if (err) {
          console.error("Erreur lors de l'insertion : ", err);
          return res.status(500).json({ error: "Erreur serveur" });
        }
        res.status(200).json({ message: "Sortie ajoutée avec succès" });
      });
    } catch (err) {
      console.error("Erreur lors de l'insertion : ", err);
      res.status(500).json({ error: "Erreur serveur" });
    }
  } else {
    res.status(405).json({ error: "Méthode HTTP non autorisée" });
  }
}
