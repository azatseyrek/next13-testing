'use client';

import useFetch from '@/hooks/useFetch';

export default function Home() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts?_page=8_limit=10');

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center gap-4">
        <h1 className="animate-pulse text-3xl font-bold uppercase shadow-md">welcome to test app</h1>
        <h2 className="animate-bounce text-3xl font-bold uppercase shadow-md ">Loading...</h2>
      </main>
    );
  }
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-xl font-bold uppercase shadow-md">welcome to test app</h1>
      <ul className="flex flex-col gap-2 text-green-200 [&>*:nth-child(even)]:text-green-600">
        {data.map((post: any) => (
          <li className="flex justify-center border border-dotted p-2" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
