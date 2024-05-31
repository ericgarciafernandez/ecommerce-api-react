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
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
