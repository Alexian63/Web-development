import "../styles/sorties_tutores.css";
import Navbar from "../components/Navbar"; // Importation du composant Navbar
import BarMitzvah from "../components/barmitzvah";
import "../styles/polices.css"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Search, Calendar, Sliders, Grid } from "lucide-react";


export function DateComponent({ selectedDate, setSelectedDate }: { selectedDate: string, setSelectedDate: (date: string) => void }) {
    return (
        <div className="search-section date-picker">
            <Calendar className="icon" />
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-input"
            />
        </div>
    );
}

const sorties_tutores: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // Date du jour par défaut

    return (
        <div>
            <Navbar />
            <div className="search-bar">
                {/* Recherche */}
                <div className="search-section">
                    <Search className="icon" />
                    <input type="text" placeholder="Recherche" className="input" />
                </div>

                {/* Date */}
                <div className="date-section">
                    <DateComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </div>

                {/* Bouton Recherche */}
                <button className="button">RECHERCHE</button>
            </div>
            <BarMitzvah />
        </div>
    );
};

export default sorties_tutores;


