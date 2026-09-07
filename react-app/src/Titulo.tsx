function Titulo(){
  //jsx
  const nombre = "Chanchito feliz";
  if (nombre){
    return <h1>Hola {nombre}</h1>;
  }
  return <p>Hola Mundo</p>;
  
}
export default Titulo;