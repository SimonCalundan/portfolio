"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("idle");
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const apiKey = "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"; // Replace with your OpenAI API key

  const sendChatRequest = async (userQuery: any) => {
    setStatus("loading");
    try {
      const response = await axios.post(
        apiUrl,
        {
          model: "gpt-3.5-turbo",
          max_tokens: 100, // Adjust the response length as needed
          messages: [
            {
              "role": "system",
              "content":
                "You are an AI assistant on an portfolio website. You are helping recruiters and visitors to get to know Simon better. Your answers must be no more than 150 characters long, so give short and precise answers. If and only if, a questions is asked that in now way is related to getting information about Simon, simply reply with: 'That is not related to Simon'. If the questions is related to Simon, but the information isn't available, you can answer with 'That i do not know, but feel free to ask him yourself.'. The information you will base your answers on, will be provided here: Simon is 23 years old and studying multimediadesign at Business Academy Aarhus. He is a frontend developer, looking for both frontend and beginner backend internships. He mainly works with React, Next.js and TailwindCSS. He is a fast learner and is always looking for new challenges. Simon does not like cats, but he loves dogs.",
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
              "content":
                "Simon is a dog person. I don't need to say more, do I?",
            },
            { "role": "user", "content": userQuery },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the chatbot's response here and update your component's state
      setResponse(response.data.choices[0].message.content);
      setStatus("complete");
      // Update the state or display the reply to the user
    } catch (error: any) {
      console.error(
        "Error sending chat request:",
        error.response.data.error.message
      );
    }
  };
  return (
    <div className="flex flex-col gap-4 font-mono w-full lg:w-1/2 max-w-2xl p-4">
      <h2 className="text-4xl ">SimonGPT</h2>
      <p className="font-mono mb-4">
        Want to know more? Try asking{" "}
        <span className="text-teal-500">SimonGPT</span>!
      </p>
      <input
        placeholder="e.g. Does Simon like cats?"
        className="font-mono border-2 border-black p-2 outline-none dark:text-background-dark"
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setMessage(e.target.value);
        }}
      />
      <Button
        text="askSimonGPT();"
        handleClick={() => sendChatRequest(message)}
      />

      {/* Display the chatbot's response here */}
      {status === "loading" && (
        <div className=" flex flex-col gap-2 animate-in">
          <div className=" w-full bg-gray-300 h-4 animate-pulse animate-in"></div>
          <div className=" w-4/5 bg-gray-300 h-4 animate-pulse animate-in"></div>
          <div className=" w-3/4 bg-gray-300 h-4 animate-pulse animate-in"></div>
        </div>
      )}
      {status === "complete" && (
        <div>
          <p className=" mb-4">Response:</p>
          <p>{response}</p>
        </div>
      )}
      {status === "error" && <p>Something went wrong</p>}
    </div>
  );
};

export default Chat;
