import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import "../styles/connexion.css";
import Navbar from "../components/Navbar"; // Importation du composant Navbar
import BarMitzvah from "../components/barmitzvah";
import "../styles/polices.css"


export default function connexionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Tentative de connexion avec les informations fournies
    const res = await signIn("credentials", {
      redirect: false, // Empêche la redirection automatique
      email,
      password,
    });

    if (res?.error) {
      alert("Erreur d'authentification");
    } else {
      if(email == "admin@oser-cs.fr")
      {
        router.push("/admin/accueil"); // Redirige vers la page d'accueil après la connexion réussie
      }
      else {
        router.push("/espace_tutore"); // Redirige vers la page d'accueil après la connexion réussie
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2 className="raleway">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="nunito" htmlFor="email">Email</label>
            <input
              className="nunito"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
            />
          </div>
          <div>
            <label className="nunito" htmlFor="password">Mot de passe</label>
            <input
              className="nunito"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <button className="Nunito" type="submit">Connexion</button>
          <p>
            <a className="nunito blue" href="#">Mot de passe oublié ?</a>
          </p>
          <p className="nunito">
            Pas encore de compte ? <a href="/Formulaire">Inscris-toi ici</a>
          </p>
        </form>
      </div>
      <BarMitzvah />
    </div>
  );
}