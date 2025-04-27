import React from "react";
import Navbar from "../components/Navbar"; // Importation du composant Navbar
import Text from "../components/Text";
import BarMitzvah from "../components/barmitzvah";
import { Helmet } from "react-helmet"; // Utilisation pour gérer le <head>
import "../styles/nos-actions.css"; // Importation du fichier CSS global
import "../styles/polices.css"

const NosActions: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div className="mx-4" >
        <Text
          text="Une action complète, épanouissante et structurante !"
          fontSize="text-5xl" // Taille de texte
          textColor="text-white" // Couleur du texte = blanc
          textAlign="center"
          fontFamily="raleway" // Police = railway
          fontWeight="font-bold" // Texte en gras
          padding="px-4 py-10" // Padding = 16px
          bgColor="bg-[#312682]" 
          customClasses="shadow-lg mt-[40px] text-center" // Ombre douce + marge de 40 pixels en haut + texte centré
          borderRadius = "full" //permet d'avoir des coins arrondis
          marginX="50"
        />
      </div>
      <div className="titre">
        <Text
          text="Apprendre, comprendre"
          fontSize="text-4xl" //
          textColor="text-black" // Couleur du texte = noir
          fontFamily="raleway" // Police = railway
          fontWeight="font-bold" // Texte en gras
          padding="px-4 py-4" // Padding = 16px
          customClasses="mt-[20px]" // Ombre douce
        />
      </div>
      <div className="description">
        <Text
          text={
            <>
              <span className="Weight">Le tutorat </span>
              constitue notre cœur de métier. Le principe ? Toutes les unes à
              deux semaines et de la Troisième à la Terminale, élèves et tuteurs
              se retrouvent en petits groupes pour des activités suscitant{" "}
              <span className="Weight">
                l’ouverture d’esprit et la curiosité intellectuelle.{" "}
              </span>{" "}
              Ces rencontres périodiques établissent une{" "}
              <span className="Weight">relation privilégiée </span> entre les
              étudiants-tuteurs et les élèves qu’ils accompagnent.
              <br />
              <span className="bleu_oser Weight">
                Pour l’année 2018-2019, les tuteurs ont consacré plus de 8000
                heures aux séances de tutorat.{" "}
              </span>
            </>
          }
          fontSize="text-base" //
          textColor="text-black" // Couleur du texte = noir
          fontFamily="nunito" // Police = nunito
          padding="px-10" // Padding = 16px
          customClasses="mt-[0px]" // Ombre douce
        />
      </div>
      <div className="titre">
        <Text
          text="Découvrir, s'émerveiller"
          fontSize="text-4xl" //
          textColor="text-black" // Couleur du texte = noir
          fontFamily="raleway" // Police = railway
          fontWeight="font-bold" // Texte en gras
          padding="px-4 py-4" // Padding = 16px
          customClasses="mt-[20px]" // Ombre douce
        />
      </div>
      <div className="description">
        <Text
          text={
            <>
              Pour sensibiliser les élèves à la culture, aux sciences ou encore
              au monde de l’entreprise, nous organisons régulièrement des{" "}
              <span className="Weight">sorties pédagogiques </span> en région
              parisienne. Au programme : visites de hauts lieux de la culture et
              des sciences, d’écoles ou d’universités, et bien plus encore !
              <br />
              <span className="bleu_oser Weight">
                Pour l’année 2023-2024, 10 sorties ont été organisées : Palais
                de la Découverte, Opéra comique, maison de Victor Hugo, visite
                d'une prépa, visite du musée des égouts, du Louvre…
              </span>
            </>
          }
          fontSize="text-base" //
          textColor="text-black" // Couleur du texte = noir
          fontFamily="nunito" // Police = nunito
          padding="px-10" // Padding = 16px
          customClasses="mt-[0px]" // Ombre douce
        />
      </div>
      <div className="titre">
        <Text
          text="Vivre l'extraordinaire"
          fontSize="text-4xl" //
          textColor="text-black" // Couleur du texte = noir
          fontFamily="raleway" // Police = railway
          fontWeight="font-bold" // Texte en gras
          padding="px-4 py-4" // Padding = 16px
          customClasses="mt-[20px]" // Ombre douce
        />
      </div>
      <div className="description">
        <Text
          text={
            <>
              La spécificité de notre action tient à la place toute particulière
              que nous accordons aux{" "}
              <span className="Weight">stages et séjours</span>. Ceux-ci sont
              l’occasion unique pour nos lycéens de{" "}
              <span className="Weight">sortir du quotidien</span>. Au-delà des
              apports pédagogiques, il s’agit de vivre, pendant quelques jours à
              quelques semaines, une expérience unique qui favorise aussi le
              respect d’autrui, la vie en groupe et l’ouverture sur le monde.
              <br />
              <span className="bleu_oser Weight">
                Pour l’année 2023-2024, les lycéens ont pu participer à 3 stages
                et 4 séjours.
              </span>
            </>
          }
          fontSize="text-base" //
          textColor="text-black" // Couleur du texte = noir
          fontFamily="nunito" // Police = nunito
          padding="px-10" // Padding = 16px
          customClasses="mt-[0px]" // Ombre douce
        />
      </div>
  

      <div className="flex nunito justify-around mb-10">
          <div className="w-1/3 p-4 ml-4 mr-1 mt-6 mb-4 rounded-full bg-blue-100">
            <img
              src="Sagrada.jpg"
              alt="Photo des tutorés à Focus 2024 devant la Sagrada Familia"
              className="w-full h-auto rounded-full"
            />
          </div>
          <div className="w-1/3 p-4 ml-2.5 mr-2.5 mt-6 mb-4 rounded-full bg-blue-100">
            <img
              src="seance_taille_ajustee.jpg"
              alt="Photo d'une séance pendant l'année 2023-2024"
              className="w-full h-auto rounded-full"
            />
            
          </div>
          <div className="w-1/3 p-4 ml-1 mr-4 mt-6 mb-4 rounded-full bg-blue-100">
            <img
              src="sortie.jpg"
              alt="Photo devans le panthéon, fin de la sortie jeu de piste 2023-2024"
              className="w-full h-auto rounded-full"
            />
           
          </div>
        </div>

      <BarMitzvah />
    </div>
  );
};

export default NosActions;
