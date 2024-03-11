import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/productos`)
      .then((result) => result.json())
      .then((value) => setProductos(value));
  }, []);
  return (
    <div className="container w-1/2 mx-auto text-2xl font-bold text-center text-green-600">
      <Navbar />
      <div className="mt-6">
        <ul>
          {
            productos.map((el) => <li>{el.name}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
