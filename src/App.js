import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Background from "./components/Background";
import { Carousel } from "flowbite-react";

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/productos`)
      .then((result) => result.json())
      .then((value) => setProductos(value));
  }, []);
  return (
    <div className="w-full mx-auto text-2xl font-bold text-center">
      <Navbar />
      <Background />
      {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div> */}
      <div className="mt-6">
        <p>Lorem ipsum</p>
        {productos.map((el) => (
          <Product
            name={el.name}
            description={el.description}
            price={el.price}
            stock={el.stock}
            image={el.image}
            category={el.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
