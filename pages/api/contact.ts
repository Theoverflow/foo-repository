import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, message } = req.body;
    res.status(200).json({ ok: true, name, message });
  } else {
    res.status(405).end();
  }
}
