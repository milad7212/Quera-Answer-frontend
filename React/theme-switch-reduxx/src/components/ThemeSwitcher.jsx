import React from "react";
import { THEME_TYPE } from "../constants";
import {useDispatch, useSelector} from 'react-redux'
import { setTheme } from "../store/actions";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on redux state
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)
  
  
  const themeMode = THEME_TYPE[theme];
  
  const handleThemeChange = (e) => {
    
    dispatch(setTheme(e))
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
