import "./Login.css";
import { useState, ReactElement } from "react";
import { supabase } from "../../supabaseClient.js";

const Login = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginPage auth">
      <div className="row flex flex-center">
        <div className="col-6 form-widget">
          <h1 className="header">Log In To Your Account</h1>
          <p className="description">
            Sign in/up via magic link with your email below
          </p>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
              className={"button block"}
              disabled={loading}
            >
              {loading ? <span>Loading...</span> : <span>Send magic link</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
