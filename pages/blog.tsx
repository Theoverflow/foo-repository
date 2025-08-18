import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head><title>Blog</title></Head>
      <h1>Blog</h1>
      <p>Coming soon...</p>
    </>
  );
}

export async function getStaticProps() {
  return { props: {}, revalidate: 60 };
}
