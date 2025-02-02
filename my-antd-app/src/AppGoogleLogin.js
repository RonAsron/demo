import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ แก้ import

const clientId = "314495923397-s3r268l847l8hpg4l1hgkdebhlvkntlo.apps.googleusercontent.com";

function AppGoogleLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const onSuccess = (res) => {
    const decoded = jwtDecode(res.credential); // ✅ ใช้ jwtDecode
    console.log("Login Success:", decoded);
    setProfile(decoded);
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    console.log("Logged out");
    setIsLoggedIn(false);
    setProfile(null);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        {!isLoggedIn ? (
          <GoogleLogin onSuccess={onSuccess} onError={() => console.log("Login Failed")} />
        ) : (
          <div>
            <h3>Welcome, {profile.name}!</h3>
            <img src={profile.picture} alt="Profile" />
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default AppGoogleLogin;
