import React from "react";

function DarkMode(props) {
  const toggle = () => {
    document.body.classList.toggle("darkmode");
  };

  return (
    <div
      style={{
        position: "fixed",
        cursor: "pointer",
        top: "5%",
        right: "5%",
        backgroundColor: "orange",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
      }}
      onClick={toggle}
    ></div>
  );
}

export default DarkMode;
