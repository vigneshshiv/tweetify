/**
 * Twitter API Get-Image
 */
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  try {
    const url = JSON.parse(req.body).imageUrl;
    const response = await fetch(url, {
      method: 'GET'
    });
    const contentType = response.headers.get('Content-Type');
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log(`Response Content Type - ${contentType}`);
    //
    res.status(200).json({
      imageData: "data:" + contentType + ";base64," + buffer.toString("base64")
    });
  } catch (e: any) {
    res.status(404).json({ message: e.message });
  }
}