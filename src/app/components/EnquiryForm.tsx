"use client";

import { FormEvent, useMemo, useState } from "react";

const fields = [
  { key: "groom", label: "Name (Groom)" },
  { key: "bride", label: "Name (Bride)" },
  { key: "phone", label: "Phone no. (preferable WhatsApp)" },
  { key: "email", label: "Email" },
  { key: "date", label: "Date of event(s)" },
  { key: "type", label: "Type of event(s)" },
  { key: "venue", label: "Venue" },
  { key: "theme", label: "Concept/Theme" },
  { key: "guests", label: "No. of guests" },
] as const;

type FieldKey = (typeof fields)[number]["key"];

type FormState = Record<FieldKey, string>;

const initialState: FormState = {
  groom: "",
  bride: "",
  phone: "",
  email: "",
  date: "",
  type: "",
  venue: "",
  theme: "",
  guests: "",
};

export function EnquiryForm() {
  const [values, setValues] = useState<FormState>(initialState);

  const mailtoHref = useMemo(() => {
    const lines = [
      "To understand your needs better — we'd like to ask for the following details:",
      "",
      ...fields.map((field) => `${field.label}: ${values[field.key]}`),
      "",
      "Thank you!",
    ];

    const subject = encodeURIComponent("Enquiry - The House of Vows");
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:hello@thehouseofvows.co?subject=${subject}&body=${body}`;
  }, [values]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form className="enquiry-form" onSubmit={onSubmit}>
      <div className="form-intro">
        <h2>Write us a message and tell us about your wedding.</h2>
        <p>
          Share the essentials and your mail app will open with the enquiry
          message prepared for The House of Vows.
        </p>
      </div>

      <div className="form-grid">
        {fields.map((field) => (
          <label className="form-field" key={field.key}>
            <span>{field.label}</span>
            <input
              type={field.key === "email" ? "email" : "text"}
              value={values[field.key]}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  [field.key]: event.target.value,
                }))
              }
            />
          </label>
        ))}
      </div>

      <button type="submit" className="submit-button">
        Send Enquiry
      </button>
    </form>
  );
}
