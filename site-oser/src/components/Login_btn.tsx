import { useSession, signIn, signOut } from "next-auth/react";

// Le type `session` doit être un objet de type `Session` ou `null` si non connecté
export default function Component() {
  const { data: session } = useSession();

  // TypeScript sait maintenant que `session` peut être de type `Session | null`
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
