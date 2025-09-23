"use client";
import FormButton from "@/components/FormButton";
import { useState } from "react";
import { noPhoneNumberFormat } from "@/app/utils/formatters";
import { formatPhoneNumber } from "@/app/utils/formatters";

export default function ContactFormCard() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      const form = e.currentTarget;
      const phoneDigits = noPhoneNumberFormat(form.phone.value);
      
      if (phoneDigits.length < 10) {
        form.phone.setCustomValidity("Please enter a valid phone number (10+ digits)");
        form.phone.reportValidity();
        return;
      } else {
        form.phone.setCustomValidity("");
      }
      
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
      <input
        name="phone"
        type="tel"
        inputMode="tel"
        placeholder="Phone *"
        required
        className="w-full p-2 border rounded"
        onInput={(e) => {
          const el = e.currentTarget as unknown as HTMLInputElement;
          el.value = formatPhoneNumber(el.value);
          el.setCustomValidity("");
        }}
        onBlur={(e) => {
          const el = e.currentTarget as unknown as HTMLInputElement;
          const digits = noPhoneNumberFormat(el.value);
          if (digits.length < 10) {
            el.setCustomValidity("Please enter a valid phone number (10+ digits)");
          } else {
            el.setCustomValidity("");
          }
        }}
      />
      <input name="email" type="email" placeholder="Email *" required className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" />

      <FormButton variant="secondary" className="w-full md:w-auto">
        Submit
      </FormButton>

      {status === "success" && <p className="text-outer-space font-bold">Thanks! Your message was sent.</p>}
      {status === "error" && <p className="text-red-600 font-bold">Oops, something went wrong. Please try again.</p>}
    </form>
    </div>
  );
}
