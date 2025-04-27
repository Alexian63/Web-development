// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connection from "../../../../backend/db"; // Connection à votre base de données

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Si l'email et le mot de passe sont fournis
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Vérifier si l'utilisateur existe dans la base de données
        const query = 'SELECT * FROM utilisateurs WHERE adresseMail = ?';
        const values = [credentials.email];
        console.log(credentials.email);
        console.log(credentials.password)
        console.log("test")
        return new Promise((resolve, reject) => {
          connection.query(query, values, (err, results) => {
            if (err) {
              reject(new Error("Erreur de base de données"));
            }
            console.log("test2")
            if (results.length === 0) {
              // Utilisateur non trouvé
              console.log("pas trouvé")
              resolve(null);
            } else {
              console.log("trouvé")
              const user = results[0];
              console.log(user.motDePasse)
              // Comparer les mots de passe en texte clair (en phase de test)
              if (credentials.password === user.motDePasse) {
                // Si le mot de passe est correct, retournez les données de l'utilisateur
                return resolve({
                  id: user.id,
                  email: user.adresseMail,
                  prénom: user.prénom,
                  nomDeFamille: user.nomDeFamille,
                  dateDeNaissance: user.dateDeNaissance,
                  genre: user.genre,
                  nationalité: user.nationalité,
                  numéroDeRue: user.numéroDeRue,
                  rue: user.rue,
                  codePostal: user.codePostal,
                  ville: user.ville,
                  numéroDeTéléphonePersonnel: user.numéroDeTéléphonePersonnel,
                  numéroDeTéléphoneDesParents: user.numéroDeTéléphoneDesParents,
                  emailDesParents: user.emailDesParents,
                  établissement: user.établissement,
                  classe: user.classe,
                  voie: user.voie,
                  enseignementsDeSpécialité: user.enseignementsDeSpécialité,
                  boursier: user.boursier,
                  activiteResponsable1: user.activiteResponsable1,
                  activiteResponsable2: user.activiteResponsable2,
                  statutResponsables: user.statutResponsables,
                  nbPersonnesCharge: user.nbPersonnesCharge
                });
              } else {
                // Si le mot de passe est incorrect
                resolve(null);
              }
            }
          });
        });
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/signin", // Page de connexion personnalisée
  }
});

