import { useState } from "react";
import Card from "./components/Card/Card";
import { Form } from "./components/Form";

function App() {
  //Aqui deberias agregar los estados y l os handlers para los inputs

  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const [nombre,setNombre] =useState('');
  const [color,setColor] =useState('');
    
  const handlerChangeNombre = (e) => {
    console.log("handlerChange: ",e.target.value);
    setNombre(e.target.value);
}

const handlerChange = (e) => {
    console.log("handlerChange: ",e.target.value);
    setColor(e.target.value);
}
const validarEspacio = (value) => {
  const regex = /^\s+/; 
  return regex.test(value) ? false : true;
};
const validarLongitud = (value,longitud) =>{
  return value.length < longitud ? false : true;

}
const handlerSubmit = (e, data) => {
  e.preventDefault();
  if (
    validarEspacio(data.nombre) &&
    validarLongitud(data.nombre, 3) &&
    validarLongitud(data.color, 6)
  ) {
    setData(data);
    setError(false);
  } else {
    setError(true);
    setData({});
  }
};


  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form 
        handlerSubmit= {handlerSubmit} 
        handlerChangeNombre={handlerChangeNombre}
        handlerChange= {handlerChange}
        nombre={nombre}
        color={color}  
             
        />
        {data.name && data.color && <Card data={data} />}

        {error && (
        <p>
          Por favor chequea que la información sea correcta
        </p>
      )}
      
    </div>
  );
}

export default App;
