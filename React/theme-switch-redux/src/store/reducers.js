// # Reducer name should be **themeReducer**

export const themeReducer = (state = { theme: "LIGHT" }, action) => {
    return { theme: state.type === "LIGHT" ? "DARK" : "LIGHT" };
};