import { useState } from "react";
import LoginPage from "./LoginPage";
import MainWebsite from "./MainWebsite";
import "./styles.css";

const SITE_PASSWORD = "CF2027!";

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  function handleLogin(password) {
    if (password === SITE_PASSWORD) {
      setIsUnlocked(true);
      return { success: true };
    }

    return {
      success: false,
      error: "Incorrect password. Please try again.",
    };
  }

  return isUnlocked ? <MainWebsite /> : <LoginPage onLogin={handleLogin} />;
}
