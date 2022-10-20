import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import AppContext from "../AppContext";

function ThemeToggler(props) {
  const handleOnChange = (darkMode) => {
    darkMode.toggle();
    console.log("from Theme", darkMode.value);
  };

  return (
    <>
      <AppContext.Consumer>
        {(values) => (
          <div>
            <DarkModeToggle
              onChange={() => handleOnChange(values.darkMode)}
              checked={values.darkMode.value}
              size={50}
            />
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
}

export default ThemeToggler;
