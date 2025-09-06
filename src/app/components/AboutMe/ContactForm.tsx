"use client";
import React, { ChangeEvent, useState } from "react";
import Button from "../UI/Button/Button";

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("Sending...");

    const web3FormData = new FormData();
    web3FormData.append("access_key", "567e6196-94b5-443c-89ca-a7421d509d87");

    Object.keys(formData).forEach((key) => {
      web3FormData.append(key, formData[key as keyof TFormData]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Error:", data);
        setStatus(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("There was an error sending your message.");
    }

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-6 mt-5 md:mt-0 md:ml-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          placeholder="Name"
          name="name"
          required
          className="flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-foreground-muted"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          name="email"
          required
          type="email"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-foreground-muted"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          placeholder="Phone"
          name="phone"
          // required
          className="flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-foreground-muted"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          rows={4}
          name="message"
          required
          placeholder="Message"
          className="flex w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-foreground-muted"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <Button
          label="Submit"
          type="primary"
          className="w-full"
          size="sm"
        />
      </form>
      {status && <p className="text-center">{status}</p>}
    </div>
  );
};

export default ContactForm;
