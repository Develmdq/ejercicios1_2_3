import { Contacto } from "../models/contacto.class";
import ComponenteB from "./ComponenteB";

const ComponenteA = () => {
  const dataContacto = new Contacto("Eduardo", "Marcet", "email@email.com");
  const { nombre, apellido, email } = dataContacto;

  return (
    <>
      <h2>Datos de contacto:</h2>
      <p>
        Nombre: <span>{nombre}</span>
      </p>
      <p>
        Apellido: <span>{apellido}</span>
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
      <ComponenteB estado={true} />
    </>
  );
};;

export default ComponenteA;
