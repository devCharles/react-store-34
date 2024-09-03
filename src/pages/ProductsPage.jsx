import { useEffect, useState } from "react";
import { getAllProducts } from "../api";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("[get products error]", error));
  }, []);

  return (
    <main className="p-4 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-center ">Products</h1>
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {products.map((product, idx) => {
          return (
            <ProductCard
              key={`product-${idx}`}
              id={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          );
        })}
      </section>
    </main>
  );
}
