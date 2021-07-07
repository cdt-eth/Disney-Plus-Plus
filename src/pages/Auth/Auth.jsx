import "./Auth.css";
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient.js";
import Login from "../Login/Login.tsx";
import Account from "../Account/Account";

export default function Auth() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Login />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}
