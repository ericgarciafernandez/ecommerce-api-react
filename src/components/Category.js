import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import Layout from "./Layout";

function Category() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  async function getCategory() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/categorias/${category}`
      );
      const value = await response.json();
      setProducts(value);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  useEffect(() => {
    getCategory();
  }, [category]);

  return (
    <Layout>
      <p className="mt-6 text-2xl text-center font-bold uppercase">
        {category}
      </p>
      <div className="container mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <p className="text-center text-lg">No hay productos disponibles</p>
        )}
      </div>
    </Layout>
  );
}

export default Category;
