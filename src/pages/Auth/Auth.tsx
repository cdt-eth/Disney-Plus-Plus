import "./Auth.css";
import React, { useState, useEffect, ReactElement } from "react";
import Login from "../Login/Login";
import Account from "../Account/Account";
import { supabase } from "../../supabaseClient.js";
import { Session } from "@supabase/supabase-js";

const Auth = (): ReactElement => {
  const [session, setSession] = useState<Session | null>(null);

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
        <Account key={session.user!.id} session={session} />
      )}
    </div>
  );
};

export default Auth;
