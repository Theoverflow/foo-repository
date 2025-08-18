import Head from 'next/head';

interface Project { id: number; title: string; }

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <Head><title>Projects</title></Head>
      <h1>Projects</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=10');
    const projects = await res.json();
    return { props: { projects } };
  } catch {
    return { props: { projects: [] } };
  }
}
