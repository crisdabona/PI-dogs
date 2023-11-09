import React from "react";
import FallingEmojis from "../../components/emojis/FallingEmojis";

import './error.css'

const Error = () => {
  return (
    <div className="error-page">
      <FallingEmojis/>
      <h2>Error 404: Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
};

export default Error;
