import { useState, useEffect } from "react";

// ─── LOCALSTORAGE KEY ─────────────────────────────────────────────────────────
const USER_STORAGE_KEY = "send-it-user";

// ─── useUser ──────────────────────────────────────────────────────────────────

export function useUser() {
  // Initialize from localStorage if available
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stored user:", e);
        return null;
      }
    }
    return null;
  });

  // ── Sync to localStorage whenever user changes ─────────────────────────────
  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  // ── Actions ─────────────────────────────────────────────────────────────────
  
  function login(credentials) {
    // In a real app, you'd validate against a backend
    // For now, just check if there's a stored user with this email
    const storedUsers = JSON.parse(localStorage.getItem("send-it-users") || "[]");
    const foundUser = storedUsers.find(u => u.email === credentials.email);
    
    if (foundUser && foundUser.password === credentials.password) {
      setUser({
        name: foundUser.name,
        email: foundUser.email,
        joinedDate: foundUser.joinedDate,
      });
      return true;
    } else {
      alert("Invalid email or password");
      return false;
    }
  }

  function signup(userData) {
    // Store user in a "database" (localStorage array)
    const storedUsers = JSON.parse(localStorage.getItem("send-it-users") || "[]");
    
    // Check if email already exists
    if (storedUsers.some(u => u.email === userData.email)) {
      alert("An account with this email already exists");
      return false;
    }

    const newUser = {
      ...userData,
      joinedDate: new Date().toISOString(),
    };

    storedUsers.push(newUser);
    localStorage.setItem("send-it-users", JSON.stringify(storedUsers));

    // Auto-login after signup
    setUser({
      name: newUser.name,
      email: newUser.email,
      joinedDate: newUser.joinedDate,
    });

    return true;
  }

  function logout() {
    setUser(null);
  }

  return {
    user,
    login,
    signup,
    logout,
  };
}