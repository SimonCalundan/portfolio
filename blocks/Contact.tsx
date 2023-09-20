"use client";
import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/Button";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  interface FormValues {
    name: string;
    subject: string;
    message: string;
  }

  async function handleFormSubmit(data: FormValues): Promise<void> {
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: "service_lh5pxhe",
          template_id: "template_pc9sfba",
          user_id: "rAW-wIybOviDngkTr",
          template_params: data,
        }
      );
      console.log(response);
      toast.success("Message sent!", {
        style: {
          border: "2px solid #16161a",
          borderRadius: "0px",
          padding: "16px",
          color: "#16161a",
        },
        iconTheme: {
          primary: "#16161a",
          secondary: "#FFFAEE",
        },
      });
    } catch (error) {
      toast.error("Something went wrong", {
        style: {
          border: "2px solid #16161a",
          borderRadius: "0px",
          padding: "16px",
          color: "#16161a",
        },
        iconTheme: {
          primary: "#16161a",
          secondary: "#FFFAEE",
        },
      });
      console.log(error);
    }
  }

  return (
    <section
      id="contact"
      className="w-screen flex flex-col lg:flex-row gap-4 p-4 pb-8 bg-background text-background-dark dark:bg-background-dark dark:text-background transition-all max-w-[1400px] mx-auto"
    >
      <Toaster position="bottom-center" />
      {/* Text wrapper */}
      <div className="flex flex-col items-center gap-4 font-mono w-full p-4 max-w-2xl mx-auto">
        <h2 className="text-4xl ">Let&apos;s get in touch!</h2>
        <p className="mb-4">
          If you have any questions or just want to say hi, feel free to reach
          out to me using the contact form below. I spend a lot of time on my
          computer, so I&apos;ll probably get back to you pretty quickly!
        </p>

        <form className="w-full">
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="name">const name = </label>
            <input
              placeholder="Enter your name"
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              className="p-2 border-background-dark border outline-none dark:text-background-dark"
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="email">const subject = </label>
            <input
              placeholder="Enter the subject"
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
              }}
              className="p-2 border-background-dark border outline-none dark:text-background-dark"
              type="subject"
              name="subject"
              id="subject"
            />
            <label htmlFor="message">const message =</label>
            <textarea
              placeholder="Enter your message"
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
              className="p-2 border-background-dark border outline-none dark:text-background-dark"
              name="message"
              id="message"
              cols={10}
              rows={5}
            ></textarea>
            <Button
              text="contactSimon(yourInfo);"
              handleClick={(e) => {
                e.preventDefault();
                handleFormSubmit(formData);
              }}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
