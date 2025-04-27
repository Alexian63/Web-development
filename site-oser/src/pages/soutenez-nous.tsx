import React, { useEffect } from "react";
import Navbar from "../components/Navbar"; // Importation du composant Navbar

const DonationPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <iframe
        id="haWidget"
        allowtransparency="true"
        scrolling="auto"
        src="https://www.helloasso.com/associations/ouverture-sociale-pour-l-egalite-et-la-reussite/formulaires/1/widget"
        style={{ width: "100%", height: "750px", border: "none" }}
      ></iframe>
    </div>
  );
};

export default DonationPage;
