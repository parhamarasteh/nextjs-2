import Link from "next/link";

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}