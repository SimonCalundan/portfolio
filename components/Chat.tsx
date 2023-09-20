"use client";
import { useState } from "react";
import axios from "axios";

import Button from "./Button";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("idle");

  const sendChatRequest = async (userQuery: any) => {
    setStatus("loading");

    try {
      const response: any = await axios.post("/callchat", {
        message: userQuery,
      });
      console.log(response);
      setResponse(response.data.choices[0].message.content);
      if (response.data.usage.completion_tokens === 70) {
        setStatus("overflow");
      } else {
        setStatus("complete");
      }
    } catch (error: any) {
      setStatus("error");
      console.log(error);
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            sendChatRequest(message);
          }
        }}
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
      {status === "error" && (
        <div>
          <p className=" mb-4">Response:</p>
          <p>Something went wrong. Blame Simon and try again.</p>
        </div>
      )}
      {status === "overflow" && (
        <div>
          <p className=" mb-4">Response:</p>
          <p>
            Answers of this length might hurt Simon&apos;s wallet. Feel free to
            hire him, or ask a simpler question.
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
