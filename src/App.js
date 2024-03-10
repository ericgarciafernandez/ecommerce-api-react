import { useEffect, useState } from "react";

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/productos`)
      .then((result) => result.json())
      .then((value) => setProductos(value));
  }, []);
  return (
    <div className="text-2xl font-bold text-center text-green-600">
      Test api productos
      <div>
        <p>Productos: </p>
        {
          productos.map((el) => el.name)
        }
      </div>
    </div>
  );
}

export default App;
