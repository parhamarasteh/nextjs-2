import { notFound } from "next/navigation";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    return null;
  }

  const text = await res.text();

  if (!text) {
    return null;
  }

  return JSON.parse(text);
}

export default async function Product({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
    </div>
  );
}