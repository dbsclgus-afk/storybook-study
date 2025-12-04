import React from "react";

export default function ColorItem({ name, value }) {
  const boxStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: value,
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginRight: "12px",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
      <div style={boxStyle}></div>
      <div>
        <strong>{name}</strong>  
        <div>{value}</div>
      </div>
    </div>
  );
}
