// # Reducer name should be **themeReducer**

export const themeReducer = (state = { theme: "LIGHT" }, action) => {
  switch (action.type) {
    case "UPDATE":
      if (state.theme === "LIGHT") {
        return { theme: "DARK" };
      } else {
        return { theme: "LIGHT" };
      }

    default:
      return state;
  }
};
