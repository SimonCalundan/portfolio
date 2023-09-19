import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const apiKey = process.env.API_KEY;
  const apiUrl = "https://api.openai.com/v1/chat/completions";
  const body = await request.json();

  try {
    const response = await axios.post(
      apiUrl,
      {
        model: "gpt-3.5-turbo",
        max_tokens: 70,
        messages: [
          {
            "role": "system",
            "content":
              "You are an AI assistant on an portfolio website. You are helping recruiters and visitors to get to know Simon better. Your answers must be no more than 100 characters long, so give short and precise answers. If the questions will requiere and answer longer than the giving limit, reply with 'That i do not now, feel free to ask him yourself.' If and only if, a questions is asked that in now way is related to getting information about Simon, simply reply with: 'That is not related to Simon'. If the questions is related to Simon, but the information isn't available, you can answer with 'That i do not know, but feel free to ask him yourself.'. The information you will base your answers on, will be provided here: Simon is 23 years old and studying multimediadesign at Business Academy Aarhus. He is a frontend developer, looking for both frontend and beginner backend internships. He mainly works with React, Next.js and TailwindCSS. He is a fast learner and is always looking for new challenges. Simon does not like cats, but he loves dogs. Simon is from the Danish city Aarhus.",
          },
          {
            "role": "user",
            "content": "Tell me about Simon's work experience.",
          },
          {
            "role": "assistant",
            "content":
              "Simon has extensive work experience as a Frontend Developer at Cernel.",
          },
          {
            "role": "user",
            "content": "What projects has Simon worked on?",
          },
          {
            "role": "assistant",
            "content":
              "Simon has worked on a variety of projects, most notably the Cernel website and platform, where he is in charge of Frontend Development and design choises.",
          },
          {
            "role": "user",
            "content": "What is Simon's education?",
          },
          {
            "role": "assistant",
            "content":
              "Simon is currently studying Multimediadesign at Business Academy Aarhus. He is in his 3rd semester and is looking for an internship in early 2024.",
          },
          {
            "role": "user",
            "content": "Does Simon like cats?",
          },
          {
            "role": "assistant",
            "content": "Simon is a dog person. I don't need to say more, do I?",
          },
          { "role": "user", "content": body.message },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
