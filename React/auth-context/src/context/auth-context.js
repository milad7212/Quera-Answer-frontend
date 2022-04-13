import React from "react";

export const data = {
  user: "",
  logout: "",
};

export const AuthContext = React.createContext(
  data // default value
);

export function AuthProvider({ children }) {
  return <>{children}</>;
}
