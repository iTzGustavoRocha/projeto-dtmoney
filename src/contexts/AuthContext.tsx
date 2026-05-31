import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { createContext, ReactNode, useEffect, useState } from "react";

import { auth } from "../services/firebase";

interface AuthContextData {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signIn(email: string, password: string) {
    const response = await signInWithEmailAndPassword(auth, email, password);

    setUser(response.user);
  }

  async function logout() {
    await signOut(auth);
    setUser(null);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
