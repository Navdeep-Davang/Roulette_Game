import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // Simulate fetching winning value from a database or external source
    const winningValue = Math.floor(Math.random() * 14) + 1; // Values are between 1 and 14
    res.status(200).json({ value: winningValue });
  } catch {
    res.status(500).json({ error: 'Failed to fetch winning value' });
  }
}
