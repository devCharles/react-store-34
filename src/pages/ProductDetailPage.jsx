import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../api";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("[get product error]", error));
  }, []);

  return (
    <main className="flex flex-col gap-4 justify-center items-center p-4">
      <header className="text-left w-full">
        <Link
          to={`/products#product-${id}`}
          className="cursor-pointer hover:text-cyan-500"
        >
          👈 Regresar
        </Link>
      </header>
      <h1 className="text-2xl font-bold text-center">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="size-48" />
      <p className="max-w-prose">{product.description}</p>
      <p className="text-cyan-600 text-lg">{product.price}</p>
    </main>
  );
}
