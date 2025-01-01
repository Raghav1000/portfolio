"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import emailjs from "emailjs-com";

type TFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { email, message } = formData;

    if (email && message) {
      const form = document.createElement("form");

      // Create hidden input fields for each form data field
      for (const key in formData) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = formData[key as keyof TFormData];
        form.appendChild(input);
      }

      // Append the form to the document body
      document.body.appendChild(form);

      emailjs
        .sendForm(
          "service_0r6a16i",
          "template_290jv3k",
          form,
          "sezvG6QUrCr2wroPb"
        )
        .then(
          (response) => {
            console.log("Success:", response);
            setStatus("Your message has been sent successfully!");
            setFormData({ name: "", email: "", message: "", phone: "" });
          },
          (error) => {
            console.error("Error:", error);
            setStatus("There was an error sending your message.");
          }
        );
    } else {
      setStatus("Please fill out all fields.");
    }

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-6 mt-5 md:mt-0 md:ml-20">
      <input
        placeholder="Name"
        name="name"
        className={
          "flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted"
        }
        value={formData?.name}
        onChange={handleChange}
      />
      <input
        placeholder="Email"
        name="email"
        className={
          "flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted"
        }
        value={formData?.email}
        onChange={handleChange}
      />
      <input
        placeholder="Phone"
        name="phone"
        className={
          "flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted"
        }
        value={formData?.phone}
        onChange={handleChange}
      />
      <textarea
        rows={4}
        name="message"
        placeholder="Message"
        className={
          "flex w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted"
        }
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <Button
        label="Submit"
        type="primary"
        onClick={handleSubmit}
        className="w-full"
        size="sm"
      />
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
