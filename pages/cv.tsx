import Head from 'next/head';

export default function CV() {
  return (
    <>
      <Head><title>CV</title></Head>
      <h1>Curriculum Vitae</h1>
      <p>Download my CV <a href="#">here</a>.</p>
    </>
  );
}

export async function getStaticProps() {
  return { props: {}, revalidate: 3600 };
}
