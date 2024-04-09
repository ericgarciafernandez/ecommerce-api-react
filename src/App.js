import { useEffect, useState } from "react";
import Product from "./components/Product";
import Carrousel from "./components/Carousel";
import Layout from "./components/Layout";

function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/products`);
      const value = await response.json();
      setProducts(value);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <Carrousel />
      <div className="w-5/6 mx-auto my-12 flex flex-wrap justify-center gap-6">
        {products.map((el, index) => (
          <Product
            key={el.id}
            id={el.id}
            name={el.name}
            price={el.price}
            image={el.image}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
