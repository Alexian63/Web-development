import React from "react";
import Link from 'next/link';
import Head from 'next/head';

import Navbar from "../components/Navbar"; // Importation du composant Navbar

import Text from "../components/Text";
import "../styles/index.css"; // Importation du fichier CSS global
import "../styles/utils.module.css" ;
import BarMitzvah from "../components/barmitzvah";
import Banner from "../components/Banner";



/*
Cette page doit afficher les contacts d'OSER. 
Elle utilise les composants Navbar, Banner et BarMitzvah 
*/

const Contacts: React.FC = () => {

    return (
        <div style={{ position: "relative" }}>
        <Navbar />

        <div>
            <Banner
            
            backgroundColor="#bdb9df"
            padding="150px 100px 250px 100px"
            title = "Nous Contacter"
            titleAlign="center"
            titleColor="#312682" 
            fontSizeTitle="40px"

            text = {
                <>
                    <br/> 
                    Pour toute
                    <span className="Weight"> demande d’information sur nos actions</span>
                    , contactez-nous à l’adresse
                    <a href="mailto:contact@oser-cs.fr" className = "mail_rouge_oser"> contact@oser-cs.fr</a>
                    .

                    <br /> 

                    Pour toute 
                    <span className="Weight"> demande de partenariat ou presse</span>
                    , contactez-nous à l’adresse
                    <a href="mailto:contact@oser-cs.fr" className = "mail_rouge_oser">  oser.cs.ent@gmail.com</a>
                    .
                    
                </>
            }
            
           
            fontSizeText="18px"
            textAlign="center"
            
            />
        </div>

        


        <BarMitzvah />
        </div>
    );
};


export default Contacts; // Exportation par défaut du composant

