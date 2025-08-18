import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        message: formData.get('message')
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    setStatus(res.ok ? 'Sent!' : 'Error');
  }

  return (
    <>
      <Head><title>Contact</title></Head>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', maxWidth:'400px', gap:'0.5rem'}}>
        <input name="name" placeholder="Your name" required />
        <textarea name="message" placeholder="Your message" required />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </>
  );
}
