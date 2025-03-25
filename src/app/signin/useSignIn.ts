"use client";
import { request } from "@/utils/axios";
import { useEffect, useState } from "react";

export const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Load saved email from localStorage if "Remember Me" was checked
    const savedEmail = localStorage.getItem("rememberMeEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await request<{ token: string }>({
        method: "POST",
        url: "/login",
        data: { email, password },
      });

      if (!response.token) {
        throw new Error("Invalid response from server");
      }

      // Store token in localStorage
      localStorage.setItem("authToken", response.token);

      if (rememberMe) {
        localStorage.setItem("rememberMeEmail", email);
      } else {
        localStorage.removeItem("rememberMeEmail");
      }
    } catch (error: any) {
      console.error("Login failed", error);
    }
  };

  return {
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
  };
};
