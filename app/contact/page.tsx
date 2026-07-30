"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import { ContactApiResponse, ContactFormData } from "../types/contact";




const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [feedbackMessage, setFeedbackMessage] =
    useState("");

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setStatus("loading");
    setFeedbackMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result =
        (await response.json()) as ContactApiResponse;

      if (!response.ok) {
        setStatus("error");
        setFeedbackMessage(result.message);
        setFieldErrors(result.errors ?? {});
        return;
      }

      setStatus("success");
      setFeedbackMessage(result.message);
      setFormData(initialFormData);
    } catch (error) {
      console.error(
        "Erreur pendant l’envoi du formulaire :",
        error,
      );

      setStatus("error");
      setFeedbackMessage(
        "Une erreur réseau empêche l’envoi du message.",
      );
    }
  }

  const isSubmitting = status === "loading";

  return (
    <main className="bg-[#FAFAF8]">
      <section className="border-b border-[#E9E9E9] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6B1A]">
            Contact
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
            Une question concernant votre parcours de soins ?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#626262]">
            Décrivez votre besoin. L’équipe MediBook vous
            répondra avec les informations utiles.
          </p>
        </div>
      </section>
       <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6B1A]">
              Assistance
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111111]">
              Parlons de votre demande.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-[#626262]">
              Ce formulaire est destiné aux questions générales
              concernant MediBook. Il ne remplace pas une
              consultation médicale ou un service d’urgence.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E9E9E9] bg-white p-6">
              <p className="text-sm font-semibold text-[#111111]">
                Informations importantes
              </p>

              <p className="mt-3 text-sm leading-6 text-[#626262]">
                Évitez de transmettre des informations médicales
                sensibles ou confidentielles dans ce formulaire.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-[#E9E9E9] bg-white p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                id="name"
                label="Nom complet"
                value={formData.name}
                error={fieldErrors.name}
                onChange={handleChange}
                placeholder="Votre nom"
                autoComplete="name"
              />

              <FormField
                id="email"
                type="email"
                label="Adresse e-mail"
                value={formData.email}
                error={fieldErrors.email}
                onChange={handleChange}
                placeholder="nom@exemple.com"
                autoComplete="email"
              />
            </div>

            <div className="mt-6">
              <FormField
                id="subject"
                label="Sujet"
                value={formData.subject}
                error={fieldErrors.subject}
                onChange={handleChange}
                placeholder="Objet de votre demande"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-[#111111]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre demande..."
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={
                  fieldErrors.message
                    ? "message-error"
                    : undefined
                }
                className="mt-2 w-full resize-none rounded-2xl border border-[#E2E2E2] bg-white px-4 py-3 text-[#111111] outline-none transition placeholder:text-[#969696] focus:border-[#FF6B1A] focus:ring-4 focus:ring-[#FFF1E8]"
              />

              {fieldErrors.message && (
                <p
                  id="message-error"
                  className="mt-2 text-sm text-red-600"
                >
                  {fieldErrors.message}
                </p>
              )}
            </div>

            {feedbackMessage && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {feedbackMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#FF6B1A] px-6 py-3 font-semibold text-white transition hover:bg-[#E95D0D] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting
                ? "Envoi en cours..."
                : "Envoyer le message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

type FormFieldProps = {
  id: keyof ContactFormData;
  label: string;
  value: string;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
};

function FormField({
  id,
  label,
  value,
  error,
  type = "text",
  placeholder,
  autoComplete,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-[#111111]"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 h-12 w-full rounded-2xl border border-[#E2E2E2] bg-white px-4 text-[#111111] outline-none transition placeholder:text-[#969696] focus:border-[#FF6B1A] focus:ring-4 focus:ring-[#FFF1E8]"
      />

      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}