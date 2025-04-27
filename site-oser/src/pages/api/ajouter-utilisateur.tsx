import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../../backend/db'; // Utiliser le pool de connexions

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      prénom,
      nomDeFamille,
      dateDeNaissance,
      genre,
      nationalité,
      numéroDeRue,
      rue,
      codePostal,
      ville,
      numéroDeTéléphonePersonnel,
      numéroDeTéléphoneDesParents,
      emailDesParents,
      établissement,
      classe,
      voie,
      enseignementsDeSpécialité,
      boursier,
      activiteResponsable1,
      activiteResponsable2,
      statutResponsables,
      nbPersonnesCharge,
      adresseMail,
      motDePasse,
      confMotDePasse
    } = req.body;

    // Validation des données
    if (!prénom || !nomDeFamille || !dateDeNaissance || !genre || !nationalité || !numéroDeRue || !rue || !codePostal || !ville || !numéroDeTéléphonePersonnel || !numéroDeTéléphoneDesParents || !emailDesParents || !établissement || !classe || !voie || !enseignementsDeSpécialité || !boursier || !activiteResponsable1 || !activiteResponsable2 || !statutResponsables || !nbPersonnesCharge || !adresseMail || !motDePasse || !confMotDePasse) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // Vérification que les mots de passe correspondent
    if (motDePasse !== confMotDePasse) {
      return res.status(400).json({ error: 'Les mots de passe ne correspondent pas' });
    }

    try {
      // Requête SQL pour insérer un nouvel utilisateur
      const query = `
        INSERT INTO utilisateurs (
          prénom,
          nomDeFamille,
          dateDeNaissance,
          genre,
          nationalité,
          numéroDeRue,
          rue,
          codePostal,
          ville,
          numéroDeTéléphonePersonnel,
          numéroDeTéléphoneDesParents,
          emailDesParents,
          établissement,
          classe,
          voie,
          enseignementsDeSpécialité,
          boursier,
          activiteResponsable1,
          activiteResponsable2,
          statutResponsables,
          nbPersonnesCharge,
          adresseMail,
          motDePasse
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        prénom,
        nomDeFamille,
        dateDeNaissance,
        genre,
        nationalité,
        numéroDeRue,
        rue,
        codePostal,
        ville,
        numéroDeTéléphonePersonnel,
        numéroDeTéléphoneDesParents,
        emailDesParents,
        établissement,
        classe,
        voie,
        enseignementsDeSpécialité,
        boursier,
        activiteResponsable1,
        activiteResponsable2,
        statutResponsables,
        nbPersonnesCharge,
        adresseMail,
        motDePasse
      ];

      // Exécution de la requête SQL
      connection.query(query, values, (err, results) => {
        if (err) {
          console.error('Erreur lors de l\'insertion : ', err);
          return res.status(500).json({ error: 'Erreur serveur' });
        }
        res.status(200).json({ message: 'Utilisateur ajouté avec succès' });
      });
    } catch (err) {
      console.error('Erreur lors de l\'insertion : ', err);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  } else {
    res.status(405).json({ error: 'Méthode HTTP non autorisée' });
  }
}