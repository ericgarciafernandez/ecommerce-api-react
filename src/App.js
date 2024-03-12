import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/productos`)
      .then((result) => result.json())
      .then((value) => setProductos(value));
  }, []);
  return (
    <div className="container-full mx-auto text-2xl font-bold text-center">
      <Navbar />
      <div className="mt-6">
        <p>Lorem ipsum</p>
          {
          productos.map((el) =>
            <Card
              name={el.name}
              description={el.description}
              price={el.price}
              stock={el.stock}
              image={el.image}
              category={el.category}
            />)
          }
      </div>
    </div>
  );
}

export default App;
