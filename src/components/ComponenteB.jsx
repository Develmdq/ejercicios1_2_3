import { useState } from "react";
import PropTypes from "prop-types";

const ComponenteB = ({ estado }) => {
  const [conectado, setConectado] = useState(estado);
  return (
    <>      
      <button style={conectado === true ? { background: "#4caf50" } : {background:"#f44336"}} onClick={() => setConectado(!conectado)}>
        {conectado === true ? "CONTACTO EN LÍNEA" : "CONTACTO NO DISPONIBLE"}
      </button>
    </>
  );
}

ComponenteB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponenteB;
