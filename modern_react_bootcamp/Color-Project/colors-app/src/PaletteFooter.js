import React from "react";

function PaletteFooter(props) {
  const { paletteName, emoji } = props;

  return (
    <footer className="Palette-footer">
      {paletteName.id}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;
