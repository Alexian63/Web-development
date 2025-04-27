<<<<<<< HEAD
import React, { useState} from "react";
<<<<<<< HEAD:site-oser/src/pages/sorties_admin.tsx

import Navbar from "../components/Navbar"; // Importation du composant Navbar
import BarMitzvah from "../components/barmitzvah";
import InputField from "../components/InputField";
import "../styles/sorties_admin.css" ;
import "../styles/polices.css" ;
=======
import Navbar from "../../components/Navbar"; // Importation du composant Navbar
import BarMitzvah from "../../components/barmitzvah";
import InputField from "../../components/InputField";
import "../../styles/sorties_admin.css" ;
import "../../styles/polices.css" ;
>>>>>>> 8da1d3adb9df0483dca4ac09b49ac20b3bc13d45:site-oser/src/pages/admin/sorties.tsx

=======
import React, { useState } from "react";
import Navbar from "../../components/Navbar"; // Importation du composant Navbar
import BarMitzvah from "../../components/barmitzvah";
import InputField from "../../components/InputField";
import "../../styles/sorties_admin.css";
import "../../styles/polices.css";
>>>>>>> 30102a488ce4ccde619ef05856b27021b8201b45

/*
Cette page permet de créer le formulaire des admins pour créer les sorties ! 
Les VP Sorties peuvent renseigner ici les différentes informations qui concernent la sortie, mettre une image de couverture etc.
À partir de ce formulaire, une autre page sera créée pour présenter la sortie aux tutorés ! 
*/

const SortiesAdmin = () => {
  // Ce qui va aller dans le form :
  const [formData, setFormData] = useState({
    titre: "",
    date: "",
    heuredebut: "",
    heurefin: "",
    lieu: "",
    adresse: "",
    codepostal: "",
    description: "",
    photo: "",
  });

<<<<<<< HEAD
    // Ce qui va aller dans le form :
    const [formData, setFormData] = useState({
    titre: '',
    date: '',
    heuredebut: '',
    heurefin: '',
    lieu: '',
    adresse : '',
    codepostal : '',
    ville : '',
    description: '',
    photo: '',
    });

    // Fonction de gestion des changements dans les champs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
=======
  // Fonction de gestion des changements dans les champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
>>>>>>> 30102a488ce4ccde619ef05856b27021b8201b45
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données soumises:", formData);
    try {
      // Envoi des données à l'API
      const response = await fetch("/api/ajouter-sortie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Sortie ajouté avec succès !");
        // Réinitialiser le formulaire après succès
        setFormData({
          titre: "",
          date: "",
          heuredebut: "",
          heurefin: "",
          lieu: "",
          adresse: "",
          codepostal: "",
          description: "",
          photo: "",
        });
      } else {
        alert(`Erreur : ${data.error}`);
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi des données :", err);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />

<<<<<<< HEAD

                    <div className="container">

                        <label className="raleway">Description de la sortie </label>
                        <textarea
                            name = "description"
                            className="input-desc nunito" //Format de la case description
                            placeholder="Description de la sortie : thème, résumé..."
                            value = {formData.description}
                            onChange={handleChange}
                            required //Information obligatoire
                        />
                    </div>

                    <div className="form-group-two"/* Permet de mettre plusieurs blocs côte à côte  */>
                        <div className="containerdate" /* Permet d'avoir différentes info dans un même bloc visuel */> 
                            <InputField
                                //Mainteanant, on va utiliser le composant InputField
                                label="Date de la sortie" //Titre
                                name="datesortie" 
                                type="date" //Type de donnée à entrer dans la case
                                value={formData.date} //Ce qui va aller dans le formulaire
                                onChange={handleChange}
                                required={true}
                            />

                            <InputField
                                label="Heure de rendez-vous"
                                name="heuredebut" 
                                type="time" //Type de donnée à entrer dans la case
                                value={formData.heuredebut}
                                onChange={handleChange}
                                required={true}
                            />

                            <InputField
                                label="Heure de fin"
                                name="heurefin"
                                type="time"
                                value={formData.heurefin}
                                onChange={handleChange}
                                required={true}
                            />
                        </div>

                        <div className="containerlieu">

                            <InputField
                                label="Lieu de la sortie"
                                name="lieu"
                                type="text"
                                value={formData.lieu}
                                onChange={handleChange}
                                required={true}
                            />
                            
                            <InputField
                                label="Adresse"
                                name="adresse"
                                type="text"
                                value={formData.adresse}
                                onChange={handleChange}
                                required={true}
                            />

                            <InputField
                                label="Code Postal"
                                name="codepostal"
                                type="text"
                                value={formData.codepostal}
                                onChange={handleChange}
                                required={true}
                            />

                            <InputField
                                label="Ville"
                                name="ville"
                                type="text"
                                value={formData.ville}
                                onChange={handleChange}
                                required={true}
                            />


                        </div>

                    </div>


                    <input
                        //Mainteanant, on souhaite ajouter une photo de couverture
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        required
                    />


                    <button className = "nunito" type="submit">Publier la sortie</button>
                
            </form>
        


        <BarMitzvah />
=======
      <form onSubmit={handleSubmit}>
        <div className="container-titre">
          <label className="raleway">Titre de la sortie : </label>
          <textarea
            name="titre"
            className="input-titre nunito" //Format du titre
            placeholder="Titre de la sortie" //Ce qui est noté dans la case à remplir
            value={formData.titre} //Ce qui va aller dans le form
            onChange={handleChange}
            style={{ display: "inline-block" }}
            required //Information obligatoire
          />
>>>>>>> 30102a488ce4ccde619ef05856b27021b8201b45
        </div>

        <div className="container">
          <label className="raleway">Description de la sortie </label>
          <textarea
            name="description"
            className="input-desc nunito" //Format de la case description
            placeholder="Description de la sortie : thème, résumé..."
            value={formData.description}
            onChange={handleChange}
            required //Information obligatoire
          />
        </div>

        <div
          className="form-group-two" /* Permet de mettre plusieurs blocs côte à côte  */
        >
          <div
            className="containerdate" /* Permet d'avoir différentes info dans un même bloc visuel */
          >
            <InputField
              //Mainteanant, on va utiliser le composant InputField
              label="Date de la sortie" //Titre
              name="date"
              mode="date" //Type de donnée à entrer dans la case
              value={formData.date} //Ce qui va aller dans le formulaire
              onChange={handleChange}
              required={true}
            />

            <InputField
              label="Heure de rendez-vous"
              name="heuredebut"
              type="time" //Type de donnée à entrer dans la case
              value={formData.heuredebut}
              onChange={handleChange}
              required={true}
            />

            <InputField
              label="Heure de fin"
              name="heurefin"
              type="time"
              value={formData.heurefin}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="containerdate">
            <InputField
              label="Lieu de la sortie"
              name="lieu"
              type="text"
              value={formData.lieu}
              onChange={handleChange}
              required={true}
            />

            <InputField
              label="Adresse"
              name="adresse"
              type="text"
              value={formData.adresse}
              onChange={handleChange}
              required={true}
            />

            <InputField
              label="Code Postal"
              name="codepostal"
              type="text"
              value={formData.codepostal}
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>

        <input
          //Mainteanant, on souhaite ajouter une photo de couverture
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required={false} //Information obligatoire
        />

        <button className="nunito" type="submit">
          Publier la sortie
        </button>
      </form>

      <BarMitzvah />
    </div>
  );
};

export default SortiesAdmin; // Exportation par défaut du composant
