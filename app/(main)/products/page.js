import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((item) => (
        <div key={item.id} className="border p-3 rounded">
          <img
            src={item.image}
            className="h-40 object-contain mx-auto"
          />

          <h2>{item.title}</h2>

          <Link
            href={`/products/${item.id}`}
            className="text-blue-600"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}