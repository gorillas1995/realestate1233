"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const FORMSYNC_ENDPOINT = "https://api.formsync.app/v1/s/FE0d059";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  budgetRange: string;
  preferredContact: string;
  preferredTime: string;
  timeline: string;
  propertyOfInterest: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  inquiryType: "Request property details",
  budgetRange: "Prefer not to say",
  preferredContact: "Phone",
  preferredTime: "Anytime",
  timeline: "Just researching",
  propertyOfInterest: "",
  message: "",
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(initialState);

  const onChange =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSYNC_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          name: `${form.firstName} ${form.lastName}`.trim(),
          source: "website-contact-form",
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Failed to submit the form. Please try again.");
      }

      setIsSubmitted(true);
      setForm(initialState);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary-foreground rounded-full">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-serif font-medium mb-4">Message Sent</h3>
        <p className="text-primary-foreground/80">
          Thank you for reaching out. A member of our team will be in touch with
          you shortly.
        </p>
      </div>
    );
  }

  // Key fix: style <option> so dropdown items are readable on all platforms (esp. Safari)
  // We set option text/background to a normal light theme, while the select itself keeps your dark/translucent UI.
  const optionClassName = "bg-white text-black";

  const selectClassName =
    "w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground rounded-xl focus:border-primary-foreground/50 focus:outline-none transition-colors duration-300";

  const inputClassName =
    "w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl focus:border-primary-foreground/50 focus:outline-none transition-colors duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error ? (
        <div className="px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-primary-foreground">
          {error}
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          required
          value={form.firstName}
          onChange={onChange("firstName")}
          placeholder="First Name"
          className={inputClassName}
        />
        <input
          type="text"
          name="lastName"
          required
          value={form.lastName}
          onChange={onChange("lastName")}
          placeholder="Last Name"
          className={inputClassName}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={onChange("email")}
          placeholder="Email Address"
          className={inputClassName}
        />
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={onChange("phone")}
          placeholder="Phone Number"
          className={inputClassName}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          name="inquiryType"
          value={form.inquiryType}
          onChange={onChange("inquiryType")}
          className={selectClassName}
        >
          <option className={optionClassName} value="Request property details">
            Request property details
          </option>
          <option className={optionClassName} value="Schedule a viewing">
            Schedule a viewing
          </option>
          <option className={optionClassName} value="Request a callback">
            Request a callback
          </option>
          <option className={optionClassName} value="Investment inquiry">
            Investment inquiry
          </option>
          <option className={optionClassName} value="Sell a property">
            Sell a property
          </option>
          <option className={optionClassName} value="Other">
            Other
          </option>
        </select>

        <select
          name="budgetRange"
          value={form.budgetRange}
          onChange={onChange("budgetRange")}
          className={selectClassName}
        >
          <option className={optionClassName} value="€200k–€500k">
            €200k–€500k
          </option>
          <option className={optionClassName} value="€500k–€1M">
            €500k–€1M
          </option>
          <option className={optionClassName} value="€1M–€3M">
            €1M–€3M
          </option>
          <option className={optionClassName} value="€3M+">
            €3M+
          </option>
          <option className={optionClassName} value="Prefer not to say">
            Prefer not to say
          </option>
        </select>
      </div>

      <input
        type="text"
        name="propertyOfInterest"
        value={form.propertyOfInterest}
        onChange={onChange("propertyOfInterest")}
        placeholder="Property of Interest (optional) — name, location, or listing ID"
        className={inputClassName}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          name="preferredContact"
          value={form.preferredContact}
          onChange={onChange("preferredContact")}
          className={selectClassName}
        >
          <option className={optionClassName} value="Phone">
            Phone
          </option>
          <option className={optionClassName} value="Email">
            Email
          </option>
          <option className={optionClassName} value="WhatsApp">
            WhatsApp
          </option>
        </select>

        <select
          name="preferredTime"
          value={form.preferredTime}
          onChange={onChange("preferredTime")}
          className={selectClassName}
        >
          <option className={optionClassName} value="Morning">
            Morning
          </option>
          <option className={optionClassName} value="Afternoon">
            Afternoon
          </option>
          <option className={optionClassName} value="Evening">
            Evening
          </option>
          <option className={optionClassName} value="Anytime">
            Anytime
          </option>
        </select>

        <select
          name="timeline"
          value={form.timeline}
          onChange={onChange("timeline")}
          className={selectClassName}
        >
          <option className={optionClassName} value="Immediately">
            Immediately
          </option>
          <option className={optionClassName} value="1–3 months">
            1–3 months
          </option>
          <option className={optionClassName} value="3–6 months">
            3–6 months
          </option>
          <option className={optionClassName} value="Just researching">
            Just researching
          </option>
        </select>
      </div>

      <textarea
        name="message"
        rows={4}
        required
        value={form.message}
        onChange={onChange("message")}
        placeholder="Tell us what you’re looking for: location, must-haves, budget, timeline, viewing request, etc."
        className={`${inputClassName} resize-none`}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-primary-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Submit
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
