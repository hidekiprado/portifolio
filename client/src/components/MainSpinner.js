import React from "react";
import { Spinner } from "react-bootstrap";

const styles = {
  spinnerContainerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
};
const MainSpinner = () => {
  return (
    <div style={styles.spinnerContainerStyle}>
      <Spinner animation="grow" />
    </div>
  );
};

export default MainSpinner;
