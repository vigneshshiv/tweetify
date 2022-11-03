/**
 * Twitter API
 */
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string
}

const API_URL = process.env.TWITTER_API_URL;
const BEARER_TOKEN = process.env.BEARER_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const tweetId = JSON.parse(req.body).tweetUrl.split(/[\/?]/g)[5];
    let data;
    if (tweetId) {
      const url = API_URL!.replace('{id}', tweetId);
      const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${BEARER_TOKEN}`
        })
      });
      data = await response.json();
    }
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: "Something went wrong, Make sure the Tweet API URL is correct" });
  }
}
