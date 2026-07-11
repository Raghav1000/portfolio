"use client";
import React, { ChangeEvent, useState } from "react";
import Button from "../UI/Button/Button";

type TFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type TStatus = {
  type: "idle" | "sending" | "success" | "error";
  message: string;
};

const initialForm: TFormData = { name: "", email: "", phone: "", message: "" };

const inputClass =
  "h-11 w-full rounded-md border border-white/15 bg-white/[0.02] px-3 text-sm text-foreground placeholder:text-foreground-muted outline-none transition-colors focus:border-primary/60";

const ContactForm = () => {
  const [formData, setFormData] = useState<TFormData>(initialForm);
  const [status, setStatus] = useState<TStatus>({ type: "idle", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus({ type: "sending", message: "Sending..." });

    const web3FormData = new FormData();
    web3FormData.append("access_key", "567e6196-94b5-443c-89ca-a7421d509d87");
    Object.entries(formData).forEach(([key, value]) => {
      web3FormData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });
        setFormData(initialForm);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error sending your message.",
      });
    }

    setTimeout(() => setStatus({ type: "idle", message: "" }), 4000);
  };

  const isSending = status.type === "sending";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          aria-label="Name"
          placeholder="Name"
          name="name"
          required
          className={inputClass}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          aria-label="Email"
          placeholder="Email"
          name="email"
          required
          type="email"
          className={inputClass}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <input
        aria-label="Phone (optional)"
        placeholder="Phone (optional)"
        name="phone"
        type="tel"
        className={inputClass}
        value={formData.phone}
        onChange={handleChange}
      />
      <textarea
        aria-label="Message"
        rows={4}
        name="message"
        required
        placeholder="Message"
        className={`${inputClass} h-auto py-2.5 resize-y`}
        value={formData.message}
        onChange={handleChange}
      />
      <Button
        label={isSending ? "Sending..." : "Send Message"}
        type="primary"
        className="w-full"
        size="lg"
        htmlType="submit"
        disabled={isSending}
      />
      {status.message && (
        <p
          role="status"
          className={`text-center text-sm ${
            status.type === "success"
              ? "text-green-400"
              : status.type === "error"
              ? "text-red-400"
              : "text-foreground-muted"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
