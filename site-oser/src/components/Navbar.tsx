import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleRedirect = () => {
    if (session) {
      // Si l'utilisateur est connecté, rediriger vers la page "espace_tutore"
      router.push("/espace_tutore");
    } else {
      // Sinon, rediriger vers la page de connexion
      router.push("/connexion");
    }
  };

  const [menuOpen, setMenuOpen] = useState(false); // Gérer l'état du menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Basculer l'état du menu
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <img src="/logo-oser.png" alt="Logo" />
        </Link>
      </div>
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link href="/QuiSommesNous">
            Qui sommes nous ?
          </Link>
        </li>
        <li>
          <Link href="/nos-actions">
            Nos actions
          </Link>
        </li>
        <li>
          <Link href="/soutenez-nous">
          Soutenez-nous
          </Link>
        </li>
        <li>
        <Link href="/contacts">
            Actualités
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            Contacts
          </Link>
        </li>
        <li>
          <Link href="#" onClick={handleRedirect}>
            Espace tutoré
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
