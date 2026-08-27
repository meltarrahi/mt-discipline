const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export type NewsletterFormValues = {
  firstName: string;
  email: string;
};

export type NewsletterFormErrors = Partial<Record<keyof NewsletterFormValues, string>>;

export function validateNewsletterForm(values: NewsletterFormValues): NewsletterFormErrors {
  const errors: NewsletterFormErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Vul je voornaam in.";
  }

  if (!values.email.trim()) {
    errors.email = "Vul een geldig e-mailadres in.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Vul een geldig e-mailadres in.";
  }

  return errors;
}

export type ContactFormValues = {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  consent: boolean;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Vul je naam in.";
  }

  if (!values.email.trim() || !isValidEmail(values.email)) {
    errors.email = "Vul een geldig e-mailadres in.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Kies een onderwerp.";
  }

  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Geef een korte toelichting van minimaal 20 tekens.";
  }

  if (!values.consent) {
    errors.consent = "Ga akkoord met de privacyverklaring om het formulier te versturen.";
  }

  return errors;
}
