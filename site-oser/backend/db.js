const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Remplacez par l'hôte de votre base de données
  user: 'root',      // Remplacez par votre nom d'utilisateur MySQL
  password: '',      // Remplacez par votre mot de passe MySQL
  database: 'site_oser_s8', // Assurez-vous que le nom de la base de données est correct
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL.');
});

module.exports = connection;