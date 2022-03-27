import React, { useState } from "react";
const ThemeContext = React.createContext({
  themeMode: "",
  setThemeMode: () => {},
});
const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("LIGHT");
  return (
    <>
      <ThemeContext.Provider
        value={{
          themeMode: themeMode,
          setThemeMode: setThemeMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
export { ThemeContext };
