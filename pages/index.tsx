import Head from 'next/head';
import Hero from '../components/Hero';

interface Post { id: number; title: string; }
interface Props { posts: Post[]; }

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Portfolio - Fullstack Engineer</title>
        <meta name="description" content="3D portfolio of a fullstack engineer" />
      </Head>
      <Hero items={posts.map(p => ({ title: p.title }))} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    const posts = await res.json();
    return { props: { posts }, revalidate: 60 };
  } catch {
    return { props: { posts: [] }, revalidate: 60 };
  }
}
