import React, { useState } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import "../styles/Formulaire.css"

const Formulaire = () => {
  const [formData, setFormData] = useState({
    prénom: '',
    nomDeFamille: '',
    dateDeNaissance: '',
    genre: '',
    nationalité: '',
    numéroDeRue: '',
    rue: '',
    codePostal: '',
    ville: '',
    numéroDeTéléphonePersonnel: '',
    numéroDeTéléphoneDesParents: '',
    emailDesParents: '',
    établissement: '',
    classe: '',
    voie: '',
    enseignementsDeSpécialité: '',
    boursier: '',
    activiteResponsable1: '',
    activiteResponsable2: '',
    statutResponsables: '',
    nbPersonnesCharge: '',
    adresseMail: '',
    motDePasse: '',
    confMotDePasse:'',
  });
  
    // Options des selects (dépendant de select2)
    const optionsSelect1 = ["Troisième", "Seconde", "Première", "Terminale", "Classe passerelle"];
    const optionsSelect2 = ["Professionnelle", "Technologique", "Général"];
    
    // Options par défaut quand SelectField 2 n'est pas encore sélectionné
    const defaultOptionsSelect3 = ["Choisir une option..."];
  
    // Options pour SelectField 3, dépendantes de la sélection dans SelectField 2
    const optionsSelect3 = {
      "Professionnelle": ["Aucun",
  
      "Accompagnement soins et services à la personne",
  
      "Aéronautique",
  
      "Aménagement et finition du bâtiment",
  
      "Animation - enfance et personnes âgées",
  
      "Artisanat et métiers d'art",
  
      "Assistance à la gestion des organisations et de leurs activités",
  
      "Aviation générale",
  
      "Bio-industries de transformation",
  
      "Boucher charcutier traiteur",
  
      "Boulanger - pâtissier",
  
      "Commerce",
  
      "Commercialisation et services en restauration",
  
      "Conducteur transport routier marchandises",
  
      "Construction des carrosseries",
  
      "Cuisine",
  
      "Esthétique cosmétique parfumerie",
  
      "Étude et définition de produits industriels",
  
      "Etude et réalisation d'agencement",
  
      "Façonnage de produits imprimés, routage",
  
      "Fonderie",
  
      "Gestion administration",
  
      "Gestion des pollutions et protection de l'environnement",
  
      "Hygiène, propreté et stérilisation",
  
      "Installateur en chauffage, climatisation et énergies renouvelables",
  
      "Interventions sur le patrimoine bâti",
  
      "Logistique",
  
      "Maintenance des équipements industriels",
  
      "Maintenance des matériels",
  
      "Maintenance des systèmes de production connectés",
  
      "Maintenance des véhicules",
  
      "Maintenance et Efficacité Energétique",
  
      "Maintenance nautique",
  
      "Menuiserie Aluminium-Verre",
  
      "Métiers de l'accueil",
  
      "Métiers de l'électricité et de ses environnements connectés",
  
      "Métiers de la coiffure",
  
      "Logistique",
  
      "Métiers de la sécurité",
  
      "Métiers du commerce et de la vente",
  
      "Métiers du cuir",
  
      "Métiers du Froid et des Énergies Renouvelables",
  
      "Métiers du pressing et de la blanchisserie",
  
      "Métiers et arts de la pierre",
  
      "Microtechniques",
  
      "Modélisation et prototypage 3D",
  
      "Optique lunetterie",
  
      "Organisation de transport de marchandises",
  
      "Ouvrage du bâtiment : métallerie",
  
      "Perruquier posticheur",
  
      "Photographie",
  
      "Pilote de ligne de production",
  
      "Plastiques et composites",
  
      "Poissonnier écailler traiteur",
  
      "Procédés de la chimie, de l'eau et des papiers-cartons",
  
      "Productique mécanique",
  
      "Prothèse dentaire",
  
      "Réalisation de produits imprimés et plurimédia",
  
      "Réparation des carrosseries",
  
      "Services de proximité et vie locale",
  
      "Systèmes numériques",
  
      "Technicien Gaz",
  
      "Technicien constructeur bois",
  
      "Technicien de maintenance de systèmes énergétiques et climatiques",
  
      "Technicien d'études du bâtiment",
  
      "Technicien du froid et du conditionnement de l'air",
  
      "Technicien d'usinage",
  
      "Technicien de fabrication bois et matériaux associés",
  
      "Technicien de maintenance de systèmes énergétiques et climatiques",
  
      "Technicien du bâtiment : organisation et réalisation du gros oeuvre",
  
      "Technicien en appareillage orthopédique",
  
      "Technicien en chaudronnerie industrielle",
  
      "Technicien en installation des systèmes énergétiques et climatiques",
  
      "Technicien en prothèse dentaire",
  
      "Technicien en réalisation de produits mécaniques",
  
      "Technicien géomètre topographe",
  
      "Technicien menuisier agenceur",
  
      "Technicien modeleur",
  
      "Technicien outilleur",
  
      "Techniques d'interventions sur installations nucléaires",
  
      "Traitements des matériaux",
  
      "Transport",
  
      "Transport fluvial",
  
      "Travaux publics",
  
      "Vente"],
      "Technologique": ['Aucun','Sciences et technologies de l’industrie et du développement durable','Sciences et technologies du design et des arts appliqués','Sciences et technologies du management et de la gestion','Sciences et technologies de la santé et du social','Sciences et technologies de laboratoire','Sciences et techniques du théâtre, de la musique et de la danse','Sciences et technologies de l\'hôtellerie et de la restauration','Sciences et technologies de l\'agronomie et du vivant'],
      "Général": ["Aucun"],
    };
    const [errors, setErrors] = useState({
      dateDeNaissance: '',
      emailDesParents: '',
    });
    

  // Fonction de gestion des changements dans les champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  // Empêcher les chiffres dans le prénom
  if (name === "prénom" && /[^A-Za-z]/.test(value)) {
    return;
  }
  if (name === "nomDeFamille" && /[^A-Za-z]/.test(value)) {
    return;
  }

  if (name === 'codePostal' && (/[^0-9]/.test(value) || value.length > 5)) {
    return;
  }

  if (name === "dateDeNaissance") {
    // Convertir la date de naissance en format ISO (AAAA-MM-JJ) pour comparaison
    const [day, month, year] = value.split('/');
    const enteredDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    // Si la date entrée est dans le futur, afficher un message d'erreur
    if (enteredDate > currentDate) {
      setErrors(prevErrors => ({
        ...prevErrors,
        dateDeNaissance: "La date de naissance ne peut pas être dans le futur."
      }));
    } else {
      // Si la date est valide, effacer le message d'erreur
      setErrors(prevErrors => ({
        ...prevErrors,
        dateDeNaissance: ''
      }));
    }
}
if (name === 'numéroDeTéléphonePersonnel' || name === 'numéroDeTéléphoneDesParents') {

  // Si l'utilisateur supprime tout (la valeur est vide), autoriser
  if (value === "") {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    return;
  }

  // Vérifie que le premier caractère est "+" ou "0", et que tout après est un chiffre
  if ((value.charAt(0) === '+' || value.charAt(0) === '0') && /[^0-9]/.test(value.slice(1))) {
    return; // Bloque l'entrée si des caractères autres que des chiffres sont ajoutés après le "+" ou le "0"
  }

  // Si ce n'est ni "+" ni "0", on bloque toute saisie (autre que chiffres)
  if (value.charAt(0) !== '+' && value.charAt(0) !== '0') {
    return;
  }

  // Bloque toute tentative de mettre un deuxième "+" ou un "0" après le premier
  if (/[^0-9]/.test(value.slice(1))) {
    return;
  }

  // Mise à jour de la valeur
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
}

    // Validation de l'email
    if (name === 'emailDesParents') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex améliorée
      const atCount = value.split('@').length - 1; // Compte le nombre de '@'
      const dotCount = value.split('.').length - 1; // Compte le nombre de '.'

      if (atCount !== 1 || dotCount < 1 || !emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailDesParents: 'L\'adresse email doit être valide et contenir un seul "@" et un seul "." après le "@".',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailDesParents: '', // Réinitialise l'erreur si tout est correct
        }));
      }
    }
    if (name === 'nbPersonnesCharge') {
      const numericValue = parseInt(value, 10);
      
      // Si la valeur est négative, on la force à zéro
      if (numericValue < 0) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: '0',  // Force la valeur à 0 si elle est négative
        }));
        return;
      }
    }
    if (name === 'adresseMail') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex améliorée
      const atCount = value.split('@').length - 1; // Compte le nombre de '@'
      const dotCount = value.split('.').length - 1; // Compte le nombre de '.'

      if (atCount !== 1 || dotCount < 1 || !emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          adresseMail: 'L\'adresse email doit être valide et contenir un seul "@" et un seul "." après le "@".',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          adresseMail: '', // Réinitialise l'erreur si tout est correct
        }));
      }
    }
  // Mise à jour de la valeur
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
  };

  // Fonction pour soumettre le formulaire

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Vérifier si les mots de passe ne correspondent pas
    if (formData.motDePasse !== formData.confMotDePasse) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confMotDePasse: "Les mots de passe ne correspondent pas",
      }));
      return; // Empêche la soumission si les mots de passe ne correspondent pas
    }
  
    // Vérifier s'il y a des erreurs
    if (Object.values(errors).some((error) => error !== "")) {
      alert("Corriger les erreurs avant d'envoyer.");
      return; // Empêche la soumission si des erreurs sont présentes
    }
  
    try {
      // Envoi des données à l'API
      const response = await fetch('/api/ajouter-utilisateur', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Utilisateur ajouté avec succès !');
        // Réinitialiser le formulaire après succès
        setFormData({
          prénom: '',
          nomDeFamille: '',
          dateDeNaissance: '',
          genre: '',
          nationalité: '',
          numéroDeRue: '',
          rue: '',
          codePostal: '',
          ville: '',
          numéroDeTéléphonePersonnel: '',
          numéroDeTéléphoneDesParents: '',
          emailDesParents: '',
          établissement: '',
          classe: '',
          voie: '',
          enseignementsDeSpécialité: '',
          boursier: '',
          activiteResponsable1: '',
          activiteResponsable2: '',
          statutResponsables: '',
          nbPersonnesCharge: '',
          adresseMail: '',
          motDePasse: '',
          confMotDePasse: '',
        });
      } else {
        alert(`Erreur : ${data.error}`);
      }
    } catch (err) {
      console.error('Erreur lors de l\'envoi des données :', err);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Formulaire de Soumission</h2>
      <form onSubmit={handleSubmit}>
        {/* Prénom (InputField, obligatoire) */}
        <div className="form-group">
          <InputField
            label="Prénom"
            name="prénom"
            value={formData.prénom}
            onChange={handleChange}
            required={true}
          />
        </div>

        {/* Nom de famille (InputField, obligatoire) */}
        <div className="form-group">
          <InputField
            label="Nom de famille"
            name="nomDeFamille"
            value={formData.nomDeFamille}
            onChange={handleChange}
            required={true}
          />
        </div>

        {/* Date de naissance */}
        <div className="form-group">
          <InputField
            mode="date"
            label="Date de naissance"
            name="dateDeNaissance"
            value={formData.dateDeNaissance}
            onChange={handleChange}
            required={true}
          />
          {errors.dateDeNaissance && (
  <div className="error">{errors.dateDeNaissance}</div>
)}
        </div>

        {/* Genre et Nationalité sur la même ligne (SelectField, obligatoire) */}
        <div className="form-group-two">
          {/* Genre */}
          <div className="select-field-container">
            <SelectField
              label="Genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required={true}
              options={["Homme", "Femme", "Autre"]}
            />
          </div>

          {/* Nationalité */}
          <div className="select-field-container">
            <SelectField
              label="Nationalité"
              name="nationalité"
              value={formData.nationalité}
              onChange={handleChange}
              required={true}
              options={[
                "Afghan(e)", "Sud-Africain(e)", "Albanais(e)", "Algérien(ne)", "Allemand(e)", "Andorran(e)", "Angolais(e)", 
                "Antiguayen(ne)", "Saoudien(ne)", "Argentin(e)", "Arménien(ne)", "Australien(ne)", "Autrichien(ne)", "Azerbaïdjanais(e)", 
                "Bahaméen(ne)", "Bahreïni(e)", "Bangladais(e)", "Barbadien(ne)", "Belge", "Bélizien(ne)", "Béninois(e)", "Bhoutanais(e)", 
                "Biélorusse", "Birman(e)", "Bosniaque", "Botswanais(e)", "Brésilien(ne)", "Brunéien(ne)", "Bulgare", "Burkinabé", 
                "Burundais(e)", "Cambodgien(ne)", "Camerounais(e)", "Canadien(ne)", "Cap-Verdien(ne)", "Chilien(ne)", "Chinois(e)", 
                "Chypriote", "Colombien(ne)", "Comorien(ne)", "Congolais(e) (République du Congo)", 
                "Congolais(e) (République Démocratique du Congo)", "Costaricien(ne)", "Croate", "Cubain(e)", "Chypriote", 
                "Danois(e)", "Djiboutien(ne)", "Dominicain(e)", "Égyptien(ne)", "Équatorien(ne)", "Érythréen(ne)", "Espagnol(e)", 
                "Estonien(ne)", "Américain(e)", "Éthiopien(ne)", "Fidjien(ne)", "Finnois(e)", "Français(e)", "Gabonais(e)", 
                "Gambien(ne)", "Ghanéen(ne)", "Grec(que)", "Grenadien(ne)", "Guadeloupéen(ne)", "Guinéen(ne)", "Bissau-Guinéen(ne)", 
                "Guyanais(e)", "Haïtien(ne)", "Hondurien(ne)", "Hongrois(e)", "Cookien(ne) (Îles Cook)", "Indien(ne)", 
                "Indonésien(ne)", "Irakien(ne)", "Iranien(ne)", "Irlandais(e)", "Islandais(e)", "Israélien(ne)", "Italien(ne)", 
                "Jamaïcain(e)", "Japonais(e)", "Jordanien(ne)", "Kazakh(e)", "Kényan(e)", "Kirghize", "Kiribatien(ne)", "Koweïtien(ne)", 
                "Laotien(ne)", "Lesothan(e)", "Letton(ne)", "Libanais(e)", "Libérien(ne)", "Libyen(ne)", "Liechtensteinois(e)", 
                "Lituanien(ne)", "Luxembourgeois(e)", "Macédonien(ne)", "Malgache", "Malaisien(ne)", "Malawien(ne)", "Maldivien(ne)", 
                "Malien(ne)", "Maltais(e)", "Marocain(e)", "Mauricien(ne)", "Mauritanien(ne)", "Mexicain(e)", "Micronésien(ne)", 
                "Moldave", "Monégasque", "Mongol(e)", "Monténégrin(e)", "Mozambicain(e)", "Namibien(ne)", "Nauruan(ne)", 
                "Népalais(e)", "Nicaraguayen(ne)", "Nigérien(ne)", "Nigérian(ne)", "Niouéen(ne)", "Norvégien(ne)", "Néo-Zélandais(e)", 
                "Omanais(e)", "Ougandais(e)", "Ouzbek(e)", "Pakistanais(e)", "Paluan(ne)", "Panaméen(ne)", 
                "Papouasien(ne) (Papouasie-Nouvelle-Guinée)", "Paraguayen(ne)", "Néerlandais(e) (Pays-Bas)", "Péruvien(ne)", 
                "Philippin(e)", "Polonais(e)", "Polynésien(ne) (Polynésie française)", "Portugais(e)", "Qatari(e)", "Roumain(e)", 
                "Britannique (Royaume-Uni)", "Rwandais(e)", "Kitticien(ne) (Saint-Kitts-et-Nevis)", 
                "Saint-Marinais(e) (Saint-Marin)", "Saint-Pierrais(e) (Saint-Pierre-et-Miquelon)", 
                "Vincentien(ne) (Saint-Vincent-et-les Grenadines)", "Salvadorien(ne)", "Samoan(e)", 
                "São-Toméen(ne) (São Tomé-et-Prince)", "Sénégalais(e)", "Serbe", "Seychellois(e)", "Sierra-Léonais(e)", 
                "Singapourien(ne)", "Syrien(ne)", "Somalien(ne)", "Soudanais(e)", "Sri-lankais(e)", "Suédois(e)", "Suisse", 
                "Surinamien(ne)", "Svalbardien(ne)", "Swazi(e) (Swaziland)", "Tanzanien(ne)", "Tchadien(ne)", "Thaïlandais(e)", 
                "Timorais(e) (Timor oriental)", "Togolais(e)", "Tongien(ne)", "Trinidadien(ne) (Trinité-et-Tobago)", 
                "Tunisien(ne)", "Turkmène (Turkménistan)", "Turc(que) (Turquie)", "Tuvaluan(ne)", "Ukrainien(ne)", "Urugayen(ne)", 
                "Vanuatuan(ne)", "Vénézuélien(ne)", "Vietnamien(ne)", "Yéménite", "Zambien(ne)", "Zimbabwéen(ne)"
              ]}
            />
          </div>
        </div>
        {/* Numéro de rue et rue */}
        <div className="form-group-two">
          {/* Numéro de rue */}
          <div className="select-field-container">
          <InputField label="Numéro de rue" name="numéroDeRue" value={formData.numéroDeRue} onChange={handleChange} required />
          </div>

          {/* Rue */}
          <div className="select-field-container">
          <InputField label="Rue" name="rue" value={formData.rue} onChange={handleChange} required />
          </div>
          </div>
        {/* Code postal et ville*/}
        <div className="form-group-two">
          {/* Code postal */}
          <div className="select-field-container">
          <InputField label="Code postal" name="codePostal" value={formData.codePostal} onChange={handleChange} required />
          </div>
          {/* Rue */}
          <div className="select-field-container">
          <InputField label="Ville" name="ville" value={formData.ville} onChange={handleChange} required />
          </div>
          </div>
        {/* Numéro de tel perso */}
        <div className="form-group">
        <InputField label="Numéro de téléphone personnel" name="numéroDeTéléphonePersonnel" value={formData.numéroDeTéléphonePersonnel} onChange={handleChange} required />
        </div>
        {/* Numéro de tel parents */}
        <div className="form-group">
        <InputField label="Numéro de téléphone des parents" name="numéroDeTéléphoneDesParents" value={formData.numéroDeTéléphoneDesParents} onChange={handleChange} required />
        </div>
        {/* Email des parents */}
        <div className="form-group">
        <InputField label="Email des parents" name="emailDesParents" mode="email" value={formData.emailDesParents} onChange={handleChange} required />
      {errors.emailDesParents && <div className="error">{errors.emailDesParents}</div>}
        </div>
        {/* Etablissement */}
        <div className="form-group">
        <SelectField label="Etablissement" name="établissement" required options={['Robert Doisneau (Corbeil-Essones)', 'Henri Matisse (Montreuil)', 'Jean Jaurès (Montreuil)', 'Charles Péguy (Bobigny)', 'Missak et Mélinée Manouchian (Chatenay-Malabry)', 'Parc des Loges (Evry)', 'Jean Jaurès (Argenteuil)']} value={formData.établissement} onChange={handleChange} />
        </div>
{/* Form Group Three for alignment */}
<div className="form-group-three">
          {/* Classe */}
          <div className="select-field-container">
            <SelectField
              label="Classe"
              name="classe"
              value={formData.classe}
              onChange={handleChange}
              required={true}
              options={optionsSelect1}
            />
          </div>

          {/* Select 2 */}
          <div className="select-field-container">
            <SelectField
              label="Voie"
              name="voie"
              value={formData.voie}
              onChange={handleChange}
              required={true}
              options={optionsSelect2}
            />
          </div>

          {/* Select 3 */}
          <div className="select-field-container">
            <SelectField
              label="Enseignements de spécialité"
              name="enseignementsDeSpécialité"
              value={formData.enseignementsDeSpécialité}
              onChange={handleChange}
              required={true}
              options={formData.voie ? optionsSelect3[formData.voie] : []}
            />
          </div>
        </div>
        {/* Boursier */}
<div className="form-group">
<div className="select-field-container">
  <SelectField
    label="Boursier"
    name="boursier"
    value={formData.boursier}
    onChange={handleChange}
    required
    options={["Oui, échelon 0 bis", "Oui, échelon 1", "Oui, échelon 2", "Oui, échelon 3","Oui, échelon 4","Oui, échelon 5","Oui, échelon 6","Non"]}
  />
</div>
</div>

{/* Activité des responsables légaux */}
<div className="form-group-two">
  <div className="select-field-container">
    <SelectField
      label="Activité du responsable légal 1"
      name="activiteResponsable1"
      value={formData.activiteResponsable1}
      onChange={handleChange}
      required
      options={["Salarié", "Indépendant", "Sans emploi", "Retraité"]}
    />
  </div>

  <div className="select-field-container">
    <SelectField
      label="Activité du responsable légal 2"
      name="activiteResponsable2"
      value={formData.activiteResponsable2}
      onChange={handleChange}
      required
      options={["Salarié", "Indépendant", "Sans emploi", "Retraité"]}
    />
  </div>
</div>

{/* Statut des responsables légaux + Nombre de personnes à charge */}
<div className="form-group-two">
  <div className="select-field-container">
    <SelectField
      label="Statut des responsables légaux"
      name="statutResponsables"
      value={formData.statutResponsables}
      onChange={handleChange}
      required
      options={["Mariés", "Divorcés", "Séparés", "Pacsés", "Célibataire"]}
    />
  </div>

  <div className="select-field-container">
    <InputField
      label="Nombre de personnes à charge"
      name="nbPersonnesCharge"
      mode="number"
      value={formData.nbPersonnesCharge}
      onChange={handleChange}
      required
    />
  </div>
</div>

{/* Adresse mail */}
<div className="form-group">
  <InputField
    label="Adresse mail"
    name="adresseMail"
    mode="email"
    value={formData.adresseMail}
    onChange={handleChange}
    required
  />
  {errors.adresseMail && <div className="error">{errors.adresseMail}</div>}
</div>

{/* Mot de passe */}
<div className="form-group">
  <InputField
    label="Mot de passe"
    name="motDePasse"
    mode="password"
    value={formData.motDePasse}
    onChange={handleChange}
    required
  />
</div>
{/* Confirmer mot de passe */}
<div className="form-group">
  <InputField
    label="Confirmation du mot de passe"
    name="confMotDePasse"
    mode="password"
    value={formData.confMotDePasse}
    onChange={handleChange}
    required
  />
  {errors.confMotDePasse && (
  <div className="error">{errors.confMotDePasse}</div>
)}
</div>
        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulaire;
