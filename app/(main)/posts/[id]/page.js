import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function Post({params}) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>

      <p>{post.body}</p>
    </div>
  );
}