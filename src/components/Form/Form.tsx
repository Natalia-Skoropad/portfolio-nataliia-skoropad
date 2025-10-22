import React from 'react';

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useFormikContext,
  type FormikHelpers,
} from 'formik';
import * as Yup from 'yup';

import { Button } from '../../index';
import { loadDraft, saveDraft, clearDraft } from '../../utils/formDraft';

import css from './Form.module.css';

// ================================================================

type FormValues = {
  name: string;
  phone: string;
  message: string;
};

const LIMITS = {
  name: 30,
  phone: 15,
  message: 500,
};

const initialValues: FormValues = { name: '', phone: '', message: '' };

// ================================================================

const validationSchema = Yup.object({
  name: Yup.string()
    .max(LIMITS.name)
    .min(2, 'At least 2 characters')
    .required('Required'),
  phone: Yup.string()
    .max(LIMITS.phone, 'No more than 15 characters')
    .matches(/^\+?[0-9 ()-]{7,15}$/, 'Invalid phone')
    .required('Required'),
  message: Yup.string()
    .max(LIMITS.message)
    .min(10, 'At least 10 characters')
    .required('Required'),
});

// ================================================================

function DraftSaver({ disabled = false }: { disabled?: boolean }) {
  const { values } = useFormikContext<FormValues>();
  React.useEffect(() => {
    if (!disabled) saveDraft<FormValues>(values);
  }, [values, disabled]);
  return null;
}

interface ContactFormProps {
  onSent?: () => void;
  inlineSuccess?: boolean;
}

// ================================================================

function ContactForm({ onSent, inlineSuccess = true }: ContactFormProps) {
  const [sent, setSent] = React.useState(false);
  const init = React.useMemo<FormValues>(
    () => loadDraft<FormValues>(initialValues),
    []
  );

  async function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) {
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send');
      }

      clearDraft();
      helpers.resetForm({ values: initialValues });
      setSent(true);
      onSent?.();
      setTimeout(() => setSent(false), 10_000);
    } catch (e) {
      console.error(e);
    } finally {
      helpers.setSubmitting(false);
    }
  }

  return (
    <div className={css.wrap}>
      {inlineSuccess && sent && (
        <div className={css.success} role="status" aria-live="polite">
          Your message has been sent successfully :)
        </div>
      )}

      <Formik
        initialValues={init}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur
      >
        {({ isSubmitting, values, errors, touched, setFieldValue }) => {
          function limitChange(field: keyof FormValues, max: number) {
            return (
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              const next = e.target.value.slice(0, max);
              setFieldValue(field, next);
            };
          }

          return (
            <Form className={css.form} noValidate>
              <DraftSaver disabled={isSubmitting} />

              <label className={css.field}>
                <Field
                  className={`${css.input} ${
                    touched.name && errors.name ? css.inputError : ''
                  }`}
                  as="input"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  aria-invalid={!!(touched.name && errors.name)}
                  maxLength={LIMITS.name}
                  onChange={limitChange('name', LIMITS.name)}
                />
                <span className={css.counter}>
                  {values.name.length}/{LIMITS.name}
                </span>
                <ErrorMessage name="name">
                  {msg => <span className={css.errorBadge}>{msg}</span>}
                </ErrorMessage>
              </label>

              <label className={css.field}>
                <Field
                  className={`${css.input} ${
                    touched.phone && errors.phone ? css.inputError : ''
                  }`}
                  as="input"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  autoComplete="tel"
                  aria-invalid={!!(touched.phone && errors.phone)}
                  maxLength={LIMITS.phone}
                  onChange={limitChange('phone', LIMITS.phone)}
                />
                <span className={css.counter}>
                  {values.phone.length}/{LIMITS.phone}
                </span>
                <ErrorMessage name="phone">
                  {msg => <span className={css.errorBadge}>{msg}</span>}
                </ErrorMessage>
              </label>

              <label className={`${css.field} ${css.fieldtext}`}>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Write To Me"
                  className={`${css.textarea} ${
                    touched.message && errors.message ? css.inputError : ''
                  }`}
                  rows={6}
                  aria-invalid={!!(touched.message && errors.message)}
                  maxLength={LIMITS.message}
                  onChange={limitChange('message', LIMITS.message)}
                />
                <span className={css.counter}>
                  {values.message.length}/{LIMITS.message}
                </span>
                <ErrorMessage name="message">
                  {msg => <span className={css.errorBadge}>{msg}</span>}
                </ErrorMessage>
              </label>

              <Button
                type="submit"
                text={isSubmitting ? 'Sending...' : 'Send me a Message'}
                className={css.submitBtn}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ContactForm;
