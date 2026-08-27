"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  validateNewsletterForm,
  type NewsletterFormErrors,
  type NewsletterFormValues,
} from "@/lib/validation";

const initialValues: NewsletterFormValues = { firstName: "", email: "" };

/**
 * Front-end validatie zonder verzending. Koppel hier een provider (bijvoorbeeld
 * MailerLite, Brevo of Kit) of een eigen API-route in `handleSubmit` zodra deze
 * beschikbaar is. Sla geen e-mailadressen lokaal op en simuleer geen definitieve
 * inschrijving voordat een integratie actief is.
 */
export function NewsletterForm() {
  const [values, setValues] = useState<NewsletterFormValues>(initialValues);
  const [errors, setErrors] = useState<NewsletterFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const firstNameId = useId();
  const emailId = useId();

  function updateField<K extends keyof NewsletterFormValues>(
    field: K,
    value: NewsletterFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateNewsletterForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: koppel nieuwsbriefprovider hier (zie README, sectie "Nieuwsbrief koppelen").
      setIsSubmitted(true);
    }
  }

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent-soft/40 p-5 text-sm text-primary-strong"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
        <p>
          Bedankt voor je interesse. Zodra de nieuwsbriefintegratie actief is, ontvang je
          hierna automatisch een bevestiging.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={firstNameId} className="mb-1.5 block text-sm font-medium text-white">
            Voornaam
          </label>
          <input
            id={firstNameId}
            type="text"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? `${firstNameId}-error` : undefined}
            className={cn(
              "focus-ring w-full rounded-lg border bg-white/95 px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/60",
              errors.firstName ? "border-red-400" : "border-transparent",
            )}
            placeholder="Je voornaam"
          />
          {errors.firstName ? (
            <p id={`${firstNameId}-error`} className="mt-1.5 text-sm text-red-200">
              {errors.firstName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={emailId} className="mb-1.5 block text-sm font-medium text-white">
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
              "focus-ring w-full rounded-lg border bg-white/95 px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/60",
              errors.email ? "border-red-400" : "border-transparent",
            )}
            placeholder="jij@voorbeeld.nl"
          />
          {errors.email ? (
            <p id={`${emailId}-error`} className="mt-1.5 text-sm text-red-200">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Word financieel slimmer
      </Button>

      <p className="text-xs text-white/70">
        Door je in te schrijven ga je akkoord met het ontvangen van de nieuwsbrief. Uitschrijven
        kan op ieder moment. Bekijk de{" "}
        <Link href="/privacy" className="focus-ring underline underline-offset-2 hover:text-white">
          privacyverklaring
        </Link>
        .
      </p>
    </form>
  );
}
