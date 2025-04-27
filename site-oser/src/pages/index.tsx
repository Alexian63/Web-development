// src/pages/index.tsx
import React from "react";
import Navbar from "../components/Navbar"; // Importation du composant Navbar
import BarMitzvah from "../components/barmitzvah"; //Importation du composant BarMitzvah
import Text from "../components/Text";
import InteractiveWrapper from "../components/InteractiveWrapper";
import Login_btn from "../components/Login_btn";
import { useRouter } from "next/router"; // Importation de useRouter
import "../styles/index.css"; // Importation du fichier CSS global
import "../styles/polices.css"
import Link from "next/link"; // Importation de Link


const Index: React.FC = () => {
  const router = useRouter(); // Hook pour accéder à l'objet router

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <Navbar />
      <div className="image">
        <div className="transparent-square">
          <Text
            text="Ils ont l’envie, nous sommes le coup de pouce"
            fontSize="text-3xl" // Taille de texte = 24px
            textColor="text-white" // Couleur du texte = blanc
            fontFamily="raleway" // Police = serif
            fontWeight="font-bold" // Texte en gras
            padding="p-4" // Padding = 16px
            borderRadius="lg" // Coins arrondis
            customClasses="shadow-lg" // Ombre douce
          />
          <Text
            text="Depuis plus de dix ans, nous œuvrons en faveur de l’égalité des chances dans les lycées d’Ile-de-France."
            fontSize="text-lg" // Taille de texte = 24px
            textColor="text-white" // Couleur du texte = blanc
            fontFamily="nunito" // Police = serif
            padding="p-4" // Padding = 16px
            borderRadius="lg" // Coins arrondis
            customClasses="shadow-lg" // Ombre douce
          />
          <Link href="/allocqui">
          <button className="mt-4 nunito bg-white text-[#2D1A6E] px-6 py-2 rounded-lg hover:bg-gray-200 transition mx-auto block">
            Découvrez l'association
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#2D1A6E] text-white text-center py-10 px-5">
        <h2 className="text-3xl raleway font-bold mb-4 text-[#B8E0FF]">
          Qui sommes nous ?
        </h2>
        <p className="mb-4 nunito font-bold">
          Ouverture Sociale pour l’Égalité et la Réussite
          <span className="font-normal">
            {" "}
            est une association loi 1901 composée d’étudiantes et d’étudiants de
            CentraleSupélec engagés pour plus d’égalité des chances face aux
            études supérieures.
          </span>
        </p>
        <p className="max-w-2xl nunito mx-auto">
          Nous souhaitons que chacun, quelles que soient ses origines sociales,
          économiques ou culturelles, puisse forger son avenir et se munir des
          clés pour réaliser ses ambitions.
        </p>
        <Link href="/allocqui">
          <p className="mt-4 nunito border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#2D1A6E] transition inline-block">
            Lire la suite
          </p>
        </Link>
      </div>
      <div className="bg-blue-100 text-center py-10">
        <h1 className="text-4xl raleway font-bold mb-10">
          Nous agissons pour plus d'égalité des chances
        </h1>
        <div className="flex nunito justify-around mb-10">
          <div className="w-1/3 p-4 rounded-full bg-white shadow-lg">
            <img
              src="action-apprendre.jpg"
              alt="Apprendre, comprendre"
              className="w-full h-auto rounded-full"
            />
            <p className="mt-4 text-sm">Apprendre, comprendre</p>
          </div>
          <div className="w-1/3 p-4 rounded-full bg-white shadow-lg">
            <img
              src="action-decouvrir.jpg"
              alt="Découvrir, s'émerveiller"
              className="w-full h-auto rounded-full"
            />
            <p className="mt-4 text-sm">Découvrir, s'émerveiller</p>
          </div>
          <div className="w-1/3 p-4 rounded-full bg-white shadow-lg">
            <img
              src="action-vivre.jpg"
              alt="Vivre l'extraordinaire"
              className="w-full h-auto rounded-full"
            />
            <p className="mt-4 text-sm">Vivre l'extraordinaire</p>
          </div>
        </div>
        <p className="mb-4 nunito">
          De la seconde à la Terminale, nous sommes présents sur tous les fronts
          pour accompagner le développement de nos lycéens.
        </p>
        <InteractiveWrapper onClick={() => handleClick("/nos-actions")}>
          <div
            style={{
              left: "50%",
              position: "absolute",
              transform: "translateX(-50%)",
            }}
          >
            <Text
              text="En savoir plus"
              textColor="text-bleuOSERDark"
              fontFamily="nunito"
              customClasses="hover:underline"
            />
          </div>
        </InteractiveWrapper>
      </div>
      <div className="bg-[#2D1A6E] text-white py-10 px-5 text-center">
        <h2 className="text-3xl raleway font-bold mb-4 text-[#B8E0FF]">
          Ils ont l’envie, nous sommes le coup de pouce.
        </h2>
        <p className="mb-4 nunito">
          Ils nous soutiennent cette année encore :{" "}
          <span className="font-bold">
            merci à nos partenaires pour leur engagement !
          </span>
        </p>
        <p className="mb-6 nunito">
          Vous aussi, engagez-vous à nos côtés en devenant{" "}
          <span className="font-bold">
            partenaire d’Ouverture Sociale pour l’Égalité et la Réussite.
          </span>
        </p>
        <Link href="/contacts">
          <button className="bg-transparent nunito border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#2D1A6E] transition">
            Devenir partenaire
          </button>
        </Link>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          <img
            src="MIN_Ville_RVB.png"
            alt="Ministère Chargé de la Ville"
            className="h-20"
          />
          <img
            src="ANCT_Logo.png"
            alt="Agence Nationale de la Cohésion des Territoires"
            className="h-16"
          />
          <img
            src="fondation_cs.png"
            alt="Fondation CentraleSupélec"
            className="h-20"
          />
        </div>
        <p className="mt-10 nunito text-sm max-w-2xl mx-auto">
          OSER fait partie de la Cordée Mutualisée de l’Université Paris Saclay,
          projet visant à favoriser l’accès à l’enseignement supérieur, dont les
          filières d’excellence, de jeunes quel que soit leur milieu
          socioculturel. Notre action est ainsi en partie financée par des
          organismes régionaux et départementaux.
        </p>
        <p className="font-bold nunito mt-4">
          Vous aussi, soutenez notre action auprès des jeunes de la région
          parisienne.
        </p>
        <Link href="/soutenez-nous">
          <button className="mt-4 nunito bg-white text-[#2D1A6E] px-6 py-2 rounded-lg hover:bg-gray-200 transition">
            Faire un don
          </button>
        </Link>
      </div>
      <BarMitzvah />
    </div>
  );
};

export default Index; // Exportation par défaut du composant
