/**Elementos. */
const root4 = document.querySelector("#root4");


/**Fin elementos. */

//////////////////////////////////////////////////////////////////////////////////////////////

/**Inicio. */
const start = () => {
  
  ReactDOM.render(<Contador/>, root4);
 

};
/**Fin inicio. */

//////////////////////////////////////////////////////////////////////////////////////////////

/**Componentes. */
const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const clickAumentar = () => {
    setContador(contador+1)
  }

  const clickDisminuir = () => {
    setContador(contador-1);
  }

  let clase = "";
  if(contador>0){
    clase="verde";
  }else if(contador<0){
    clase="rojo";
  }
  

  /**Llamando a la funcion click con funcion flecha. */
  const botonAumentar = <button className="boton" onClick={ () => { clickAumentar() } } id="botonAumentar">Aumentar</button>;
  
  /**LLamando a la funcion click sin funcion flecha. */
  const botonDisminuir = <button className="boton disminuir" onClick={ clickDisminuir } id="botonDisminuir">Disminuir</button>;
  
  /**Llamando a la variable clase */
  const pContador = <p>Contador: <b className={clase}>{contador}</b></p>;

  /**NOTA: La forma correcta de asignar clases a las etiquetas, es a traves de la palabra reservada className, 
   * debido a que la palabra class puede generar conflictos (className es de React).
   */
  const component = React.createElement("div", {}, pContador, botonDisminuir, botonAumentar);
  return (component);
};

/**Fin Componentes. */

//////////////////////////////////////////////////////////////////////////////////////////////

/**Ejecucion del script. */
start();
