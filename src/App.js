import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import Banner from "./components/Banner";
import Layout from "./components/Layout";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/products`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Banner />
        <h1 className="text-3xl font-bold text-center my-8">
          Nuestras mejores plantas
        </h1>
        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))
            ) : (
              <p className="text-center">No hay productos disponibles.</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
