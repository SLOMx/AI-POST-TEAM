js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { prompt } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: "gpt-4",
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    const postText = completion.data.choices[0].text.trim();

    res.status(200).json({ postText });
  } catch (error) {res.status(500).json({ error: error.message });
  }
}
