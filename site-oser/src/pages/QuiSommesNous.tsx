import React from "react";
import Banner from "../components/Banner";
import testImage from "../../public/test.jpg";
import Navbar from "../components/Navbar"; // Importation du composant Navbar

import "../styles/styles.css";
import "../styles/polices.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner
        title={
          <>
            <span className="highlight">Nous sommes</span> des étudiantes et
            étudiants de CentraleSupélec engagés pour l’égalité des chances.
          </>
        }
        text={
          <>
            Notre association porte l’action d’ouverture sociale de{" "}
            <a
              href="https://www.centralesupelec.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="banner-link"
            >
              {" "}
              CentraleSupélec
            </a>
            , Grande École d’ingénieurs dont les étudiants s’engagent pour
            favoriser le lien social et la réussite de chacun.
            <br />
            Notre association loi 1901 est reconnue d’intérêt général et
            labellisée{" "}
            <a
              href="https://www.cordeesdelareussite.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="banner-link"
            >
              {" "}
              Cordées de la Réussite
            </a>
            ...
          </>
        }
      />
      <div className="section">
        <div className="text-container">
          <h2 className="section-title raleway">Notre mission</h2>
          <h3 className="subtitle raleway">
            Que chacun, quelles que soient ses origines sociales, économiques ou
            culturelles, ait les moyens de forger son avenir et de réaliser ses
            ambitions.
          </h3>
          <p className="justify nunito">
            De la Seconde à la Terminale, nous accompagnons plus de 300 lycéens
            issus de tous milieux socioculturels. Nous leur donnons les clés
            nécessaires pour écrire leur avenir et luttons contre l’autocensure
            afin qu’ils aient confiance en leur potentiel.
          </p>
          <h2 className="section-title raleway">Notre philosophie</h2>
          <h3 className="subtitle raleway">
            Des lycéens qui osent être acteurs de leur parcours.
          </h3>
          <p className="justify nunito">
            Les lycéens que nous accompagnons sont acteurs de leur orientation
            et de leurs ambitions. Nous travaillons avec eux pour leur donner
            l’ouverture d’esprit, la curiosité et l’esprit critique nécessaires
            pour comprendre le monde qui les entoure et les changements qui s’y
            opèrent.
          </p>
        </div>
        <div className="image-container">
          <img src="/test.jpg" alt="Notre mission" />
        </div>
      </div>
      <Banner
        title={
          <>
            <span className="highlight raleway">Les chiffres clés :</span>
          </>
        }
        text={
          <ul>
            <li>
              <span className="highlight nunito">13 </span>
              <span className="highlight2 nunito">
                ans d’action pour l’égalité des chances
              </span>
            </li>
            <li>
              <span className="highlight nunito">300 </span>
              <span className="highlight2 nunito">
                élèves accompagnés chaque année
              </span>
            </li>
            <li>
              <span className="highlight nunito">60 </span>
              <span className="highlight2 nunito">
                tuteurs et tutrices s’engagent chaque année
              </span>
            </li>
            <li>
              <span className="highlight nunito">8 </span>
              <span className="highlight2 nunito">
                établissements partenaires dans nos cordées
              </span>
            </li>
            </ul>
        }
      />
      <div className="section">
        <div className="text-container">
          <h2 className="section-title raleway">Un engagement de longue date</h2>
          <p className="justify nunito">
            L’histoire d’OSER s’inscrit dans le cadre de la fusion de Supélec et
            de l’École Centrale Paris, processus qui donna lieu à la création de
            CentraleSupélec en janvier 2015. Côté Supélec, un programme
            d’ouverture sociale de type « PQPM » accompagnait chaque année une
            trentaine de lycéens. Côté École Centrale Paris, l’association loi
            1901 Centrale Égalité des Chances est créée en 2010 suite au
            regroupement de diverses cordées qui s’étaient développées depuis
            2007. Se retrouvant dans les mêmes valeurs de partage, de justice
            sociale et d’égalité, les deux programmes se rapprochent
            naturellement. C’est ainsi que s’officialise la fusion entre
            Centrale Égalité des Chances et le programme PQPM Supélec :{" "}
            <span className="bold">
              le 14 décembre 2016, Ouverture Sociale pour l’Égalité et la
              Réussite est née.
            </span>
          </p>
        </div>
        <div className="image-container">
  <figure>
    <img src="/test.jpg" alt="Notre philosophie" />
  </figure>
</div>
      </div>
      <Banner
        backgroundColor="#d6faff"
        color="black"
        title={
          <>🚀 Ce site a été réalisé bénévolement par des élèves de l’école !</>
        }
        fontSizeTitle="18px"
        text={
          <>
            <br className="nunito"/>
            Nous utilisons les dernières technologies du web pour vous offrir
            une expérience fluide et agréable. <br />
            Un problème à signaler, un message à faire passer ?
            <a
              href="mailto:contact@oser-cs.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="banner-link2"
            >
              {" "}
              Contactez-nous
            </a>{" "}
            !
          </>
        }
      />
    </div>
  );
};

export default App;
