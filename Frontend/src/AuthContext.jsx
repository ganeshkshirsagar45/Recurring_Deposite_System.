import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [rduser, setRduser] = useState(null);
  const [rid, setRid] = useState(null);

  return (
    <AuthContext.Provider value={{ rduser, setRduser, rid, setRid }}>
      {children}
    </AuthContext.Provider>
  );
}