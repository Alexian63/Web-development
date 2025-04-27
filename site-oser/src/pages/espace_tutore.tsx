import { useSession, signOut } from "next-auth/react";
import Navbar from "../components/Navbar"; // Importation du composant Navbar

const espace_tutore = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div><Navbar/>Vous devez être connecté pour accéder à cette page.</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Bienvenue</h1>
      <p>Vous êtes connecté en tant que {session.user?.email}</p>
      <button onClick={() => signOut()}>Se déconnecter</button>
    </div>
  );
};

export default espace_tutore;
