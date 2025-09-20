"use client";
import FormButton from "@/components/FormButton";
import { useState } from "react";

export default function ContactFormCard() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      const form = e.currentTarget;
      const data = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        phone: form.phone.value,
        email: form.email.value,
        message: form.message.value,
      };
  
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
  
        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    }

  return (
    <div className="bg-merino rounded-lg p-8 shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
      <input name="firstName" placeholder="First Name *" required className="w-full p-2 border rounded" />
      <input name="lastName" placeholder="Last Name *" required className="w-full p-2 border rounded" />
      <input name="phone" placeholder="Phone *" required className="w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Email *" required className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" />

      <FormButton variant="secondary" className="w-full md:w-auto">
        Submit
      </FormButton>

      {status === "success" && <p className="text-green-600">Thanks! Your message was sent.</p>}
      {status === "error" && <p className="text-red-600">Oops, something went wrong.</p>}
    </form>
    </div>
  );
}
