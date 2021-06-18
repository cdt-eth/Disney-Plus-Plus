import "./Account.css";
// import { useState, useEffect, useContext } from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient.js";
// import { context } from "../../Context";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  // const { isLoggedIn, setUser, setIsLoading } = useContext(context);

  useEffect(() => {
    let unmounted = false;

    async function getProfile() {
      try {
        setLoading(true);
        const user = supabase.auth.user();

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, website, avatar_url`)
          .eq("id", user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setUsername(data.username);
          // setUser(data.username);
          setWebsite(data.website);
          setAvatarUrl(data.avatar_url);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        // isLoggedIn(true);
        // setIsLoading(false);
        setLoading(false);
      }
    }
    if (!unmounted) {
      getProfile();
    }
    return () => {
      unmounted = true;
    };
  }, [session]);
  // }, [session, setUser, isLoggedIn, setIsLoading]);

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  //   console.log("session:", session);
  //   console.log("username:", username);
  //   console.log("website:", website);

  return (
    <div className="loginPage">
      <div className="form-widget">
        <h1 className="header">Change Details</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="website"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <button
            className="button block primary"
            onClick={() => updateProfile({ username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div>
          <button
            className="button block"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
