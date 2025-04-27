// pages/_app.tsx
import { SessionProvider } from "next-auth/react"; // Pour gérer la session d'utilisateur
import { AppProps } from "next/app"; // AppProps est un type pour typer les props de ton composant
import "../styles/globals.css"; // Import des styles globaux de ton application (si tu en as)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Le SessionProvider doit envelopper ton application pour que la gestion de la session fonctionne
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
