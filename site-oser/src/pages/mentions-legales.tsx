import React from "react";

import "../styles/index.css"; // Importation du fichier CSS global
import "../styles/utils.module.css" ;
import "../styles/mentions-legales.css" ;

import Navbar from "../components/Navbar"; // Importation du composant Navbar
import BarMitzvah from "../components/barmitzvah";
import Text from "../components/Text";
import ListItem from "../components/list";


/*
Cette page permet d'afficher les mentions légales et les crédits du site. 
Chaque site doit fournir des informations précises concernant sa création et les gens qui l'utilisent (cf site du gouvernement)
Cette page utilise les composants Navbar, Text, Listitem et BarMitzvah

On a l'impression que le fichier n'est pas content, car des fois on va à la ligne au milieu d'une string (permet d'avoir plus de visibilité)
Mais ça marche quand même ! 
*/




const Mentions: React.FC = () => {

    return (
        <div style={{ position: "relative" }}>
        <Navbar />

        <div >

            <Text 
            text = "Mentions légales"
            fontSize="text-3xl" // Taille de texte = 24px
            textColor="text-bleu-fonce" // 
            fontFamily="raleway"
            fontWeight="font-bold" // Texte en gras
            textAlign="text-justify"
            padding="pb-1 pt-4 pr-4 pl-8" // Padding = 16px
            
            bgColor="white"
            
            />

            <Text 
            text = "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique 
            il est précisé aux utilisateurs de ce site l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi."
            fontSize="text-l" // Taille de texte = 24px
            textColor="black"  // Couleur du texte = blanc
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-2 pt-1 pr-8 pl-8" // Padding = 16px
            
            bgColor="white"
            
            />


            <Text 
            text = "Edition du site"
            fontSize="text-2xl" // 
            textColor="text-bleu-fonce"  //
            fontFamily="raleway" // Police = serif
            fontWeight="font-bold" // Texte en gras
            textAlign="text-justify"
            padding="pb-1 pt-4 pr-4 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-2" // Marge uniforme tout autour
            />

            <Text 
            text = {<>Le site
            <span className="Weight"> oser-cs.fr </span> 
            est édité par l’association loi 1901
            <span className="Weight"> Ouverture Sociale pour l’Égalité et la Réussite</span>
            , association déclarée dont le siège social est situé 3 Rue Joliot Curie, 91190, Gif-sur-Yvette (SIRET n° 788 722 221).
            </>}

            fontSize="text-l" // Taille de texte = 24px
            textColor="black"  // Couleur du texte = blanc
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-2 pt-1 pr-8 pl-8" // Padding = 16px
            bgColor="white"
         
            />

            <Text 
            text = "Responsable de la publication"
            fontSize="text-2xl" // 
            textColor="text-bleu-fonce" 
            fontFamily="raleway" // Police = serif
            fontWeight="font-bold" // Texte en gras
            textAlign="text-justify"
            padding="pb-1 pt-4 pr-4 pl-8" // Padding = 16px
            bgColor="white"
        
            margin="m-2" // Marge uniforme tout autour
            />

            <Text 
            text = "Mickaël Yang, président d’Ouverture Sociale pour l’Égalité et la Réussite." 
            fontSize="text-l" // Taille de texte = 24px
            textColor="black"   // Couleur du texte = blanc 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-2 pt-1 pr-8 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />
 
            <Text 
            text = "Hébergeur"
            fontSize="text-2xl" // 
            textColor="text-bleu-fonce" //
            fontFamily="raleway" // Police = serif
            fontWeight="font-bold" // Texte en gras
            textAlign="text-justify"
            padding="pb-1 pt-4 pr-4 pl-8" // Padding = 16px
            bgColor="white"
        
            margin="m-2" // Marge uniforme tout autour
            />

            <Text 
            text = "Le site oser-cs.fr est hébergé par l’Association des Réseaux de CentraleSupélec, dont le siège se situe au 1 rue Joliot Curie, 91190 Gif-sur-Yvette."
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-2 pt-1 pr-8 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            <Text 
            text = "Vie privée et collecte des données"
            fontSize="text-2xl" // 
            textColor="text-bleu-fonce" 
            fontFamily="raleway" // Police = serif
            fontWeight="font-bold" // Texte en gras
            textAlign="text-justify"
            padding="pb-1 pt-4 pr-4 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-2" // Marge uniforme tout autour
            />

            <Text 
            text = "Conformément aux prescriptions du Règlement Général pour la Protection des Données, nous attirons votre attention sur les collectes de données personnelles effectuées sur oser-cs.fr :"
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-2 pt-1 pr-8 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            <ListItem
            text = "Les données personnelles que nous récoltons sont les coordonnées des utilisateurs : nom, prénom, adresse électronique, téléphone, date de naissance, genre, nationalité, adresse postale, renseignement sur la scolarité, statut boursier. "
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-0 pt-1 pr-8 pl-14" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            <ListItem
            text = "La collecte de ces données est réalisée lors de la création d’un compte lycéen sur le site oser-cs.fr."
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-0 pt-0 pr-8 pl-14" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            <ListItem
            text = "Ces données sont stockées dans une base de données, laquelle est hébergée par l’Association des Réseaux de CentraleSupélec."
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-0 pt-0 pr-8 pl-14" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            <ListItem
            text = "Nous nous engageons à ce que seuls les membres de l’association aient accès aux informations collectées et à ce qu’ils les utilisent dans le cadre exclusif des actions de l’association Ouverture Sociale pour l’Égalité et la Réussite."
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-0 pt-0 pr-8 pl-14" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            <ListItem
            text = "Les utilisateurs peuvent, à tout moment, demander la suppression des données personnelles collectées. Il suffit pour cela de nous faire parvenir cette demande par l’un des moyens de contact ci-dessous"
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-2 pt-0 pr-8 pl-14" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            
            <Text 
            text = "Propriété intellectuelle"
            fontSize="text-2xl" // 
            textColor="text-bleu-fonce" 
            fontFamily="raleway" // Police = serif
            fontWeight="font-bold" // Texte en gras
            textAlign="text-justify"
            padding="pb-1 pt-4 pr-4 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-2" // Marge uniforme tout autour
            />

            <Text 
            text = "L’ensemble des contenus présents sur le site oser-cs.fr, y compris, mais sans s’y limiter, les textes, images, logos et éléments graphiques, sont protégés par le droit d’auteur et restent la propriété exclusive de Ouverture Sociale pour l’Égalité et la Réussite. Toute reproduction, distribution ou modification, sans autorisation préalable, est strictement interdite et pourra faire l’objet de poursuites judiciaires."
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-2 pt-1 pr-8 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            
            <Text 
            text = "Cookies"
            fontSize="text-2xl" // 
            textColor="text-bleu-fonce" 
            fontFamily="raleway" // Police = serif
            fontWeight="font-bold" // Texte en gras
            textAlign="text-justify"
            padding="pb-1 pt-4 pr-4 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-2" // Marge uniforme tout autour
            />

            <Text 
            text = "Le site oser-cs.fr n’utilise pas de cookies à des fins de suivi ou de publicité. Toutefois, des cookies techniques peuvent être déposés pour assurer le bon fonctionnement du site. L’utilisateur peut configurer son navigateur pour bloquer ou supprimer ces cookies à tout moment."
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-2 pt-1 pr-8 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

            <Text 
            text = "Nous contacter"
            fontSize="text-2xl" // 
            textColor="text-bleu-fonce" 
            fontFamily="raleway"// Police = serif
            fontWeight="font-bold" // Texte en gras
            textAlign="text-justify"
            padding="pb-1 pt-4 pr-4 pl-8" // Padding = 16px
            bgColor="white"
            margin="m-2" // Marge uniforme tout autour
            />

            <ListItem
            text = {<>Par email : <a href="mailto:contact@oser-cs.fr" className = "mail_rouge_oser"> contact@oser-cs.fr</a></>}
            //Permet d'insérer un lien cliquable dans le composant texte ! 
            fontSize="text-l" 
            textColor="black" 
            fontFamily="nunito" // Police = nunito
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-0 pt-1 pr-8 pl-14" // 
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />


            <ListItem
            text = "Par courrier : Ouverture Sociale pour l’Égalité et la Réussite, 3 Rue Joliot Curie, 91190 Gif-sur-Yvette"
            fontSize="text-l" // Taille de texte = 24px
            textColor="black" 
            fontFamily="nunito" // Police = serif
            fontWeight="" // Texte en gras
            textAlign="text-justify"
            padding="pb-10 pt-0 pr-8 pl-14" // Padding = 16px
            bgColor="white"
            margin="m-1" // Marge uniforme tout autour
            />

    
        </div>

        
                

        <BarMitzvah />
        </div>
    );
};


export default Mentions; // Exportation par défaut du composant