import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Carrousel from "./components/Carousel";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/products`)
      .then((result) => result.json())
      .then((value) => setProducts(value));
  }, []);
  return (
    <div className="w-full mx-auto text-2xl font-bold text-center">
      <Navbar />
      <Carrousel />
      <div className="w-5/6 mx-auto my-12 flex flex-wrap justify-center gap-6">
        {products.map((el, index) => (
          <Product
            key={index}
            name={el.name}
            description={el.description}
            price={el.price}
            stock={el.stock}
            image={el.image}
            category={el.category}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
