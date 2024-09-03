import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, title, price, thumbnail }) {
  const ref = useRef(null);
  const elementId = `product-${id}`;

  useEffect(() => {
    const hashId = window.location.hash.replace("#", "");

    if (hashId === elementId) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <article
      ref={ref}
      id={elementId}
      className={clsx(
        "flex flex-col items-center justify-center p-4 border border-white/10 rounded cursor-pointer gap-2",
        { "shadow-md shadow-cyan-600": window.location.hash === elementId }
      )}
    >
      <img src={thumbnail} alt={title} />
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-center text-cyan-600">${price}</p>
      </div>
      <Link
        to={`/product/${id}`}
        className="bg-white text-black text-center w-full p-2 rounded"
      >
        Ver detalle
      </Link>
    </article>
  );
}
