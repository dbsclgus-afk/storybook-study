import React from "react";
import tokens from "../tokens/figmaTokens";
import ColorItem from "../components/ColorItem";

export default {
  title: "DESIGN/Colors",
};

export const Palette = () => {
  const colors = tokens.colors;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Color Tokens</h2>
      {Object.entries(colors).map(([name, value]) => (
        <ColorItem key={name} name={name} value={value} />
      ))}
    </div>
  );
};
