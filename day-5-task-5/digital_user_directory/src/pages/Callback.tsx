import { useEffect, useRef } from "react";
import { handleCallback } from "../auth/authService";
import { useNavigate } from "react-router-dom";

export default function Callback() {
  const navigate = useNavigate();
  const isProcessing = useRef(false);

  useEffect(() => {
    const processLogin = async () => {
      if (isProcessing.current) {
        return;
      }
      isProcessing.current = true;

      try {
        await handleCallback(); // exchanges code → tokens
        navigate("/dashboard");
        console.log("login successful");
      } catch (err) {
        console.error("Login failed", err);
        navigate("/login");
      }
    };

    processLogin();
  }, [navigate]);

  return <div>Logging you in...</div>;
}