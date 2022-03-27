// # Action name should be **setTheme**

export const setTheme = (e) => {
    return({
        type: "UPDATE",
        payload: e.target.value,
    })
  
};
