"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validation";
import type { ContactSubject } from "@/types";

const subjectOptions: ContactSubject[] = [
  "Algemene vraag",
  "Content",
  "Media",
  "Samenwerking",
  "Zakelijke aanvraag",
  "Anders",
];

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
  consent: false,
};

/**
 * Front-end validatie zonder verzending. Koppel hier Resend, Formspree of een
 * eigen API-route in `handleSubmit` zodra deze beschikbaar is (zie README,
 * sectie "Contactformulier koppelen"). Voeg daarbij serverside rate limiting en
 * spamfiltering toe.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const organizationId = useId();
  const subjectId = useId();
  const messageId = useId();
  const consentId = useId();

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: koppel contactformulierintegratie hier.
      setIsSubmitted(true);
    }
  }

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent-soft/40 p-6 text-sm text-primary-strong"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
        <p>
          Bedankt voor je bericht. Dit is een demonstratieomgeving: er is nog geen
          verzendintegratie gekoppeld, dus dit bericht is niet daadwerkelijk verstuurd. Neem
          voorlopig rechtstreeks contact op via e-mail.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={nameId} className="mb-1.5 block text-sm font-medium text-ink">
            Naam
          </label>
          <input
            id={nameId}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
            className={cn(
              "focus-ring w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/50",
              errors.name ? "border-red-400" : "border-border",
            )}
          />
          {errors.name ? (
            <p id={`${nameId}-error`} className="mt-1.5 text-sm text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={emailId} className="mb-1.5 block text-sm font-medium text-ink">
            E-mailadres
          </label>
          <input
            id={emailId}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            className={cn(
              "focus-ring w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/50",
              errors.email ? "border-red-400" : "border-border",
            )}
          />
          {errors.email ? (
            <p id={`${emailId}-error`} className="mt-1.5 text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={organizationId} className="mb-1.5 block text-sm font-medium text-ink">
            Organisatie <span className="font-normal text-ink-muted">(optioneel)</span>
          </label>
          <input
            id={organizationId}
            type="text"
            autoComplete="organization"
            value={values.organization}
            onChange={(event) => updateField("organization", event.target.value)}
            className="focus-ring w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-ink"
          />
        </div>

        <div>
          <label htmlFor={subjectId} className="mb-1.5 block text-sm font-medium text-ink">
            Onderwerp
          </label>
          <select
            id={subjectId}
            value={values.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? `${subjectId}-error` : undefined}
            className={cn(
              "focus-ring w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-ink",
              errors.subject ? "border-red-400" : "border-border",
            )}
          >
            <option value="">Kies een onderwerp</option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject ? (
            <p id={`${subjectId}-error`} className="mt-1.5 text-sm text-red-600">
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor={messageId} className="mb-1.5 block text-sm font-medium text-ink">
          Bericht
        </label>
        <textarea
          id={messageId}
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className={cn(
            "focus-ring w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/50",
            errors.message ? "border-red-400" : "border-border",
          )}
          placeholder="Vertel kort over het onderwerp, de doelgroep en de gewenste vorm."
        />
        {errors.message ? (
          <p id={`${messageId}-error`} className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={consentId}
            type="checkbox"
            checked={values.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${consentId}-error` : undefined}
            className="focus-ring mt-1 h-4 w-4 rounded border-border text-primary"
          />
          <label htmlFor={consentId} className="text-sm text-ink-muted">
            Ik ga akkoord met de{" "}
            <a href="/privacy" className="focus-ring text-primary underline underline-offset-2">
              privacyverklaring
            </a>
            .
          </label>
        </div>
        {errors.consent ? (
          <p id={`${consentId}-error`} className="mt-1.5 text-sm text-red-600">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="focus-ring w-full rounded-full bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-strong sm:w-auto"
      >
        Verstuur mijn aanvraag
      </button>
    </form>
  );
}
