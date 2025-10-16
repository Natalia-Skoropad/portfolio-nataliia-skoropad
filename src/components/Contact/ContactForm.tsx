import React from 'react';
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import * as Yup from 'yup';

import styles from './contact-form.module.css';

type FormValues = {
  name: string;
  phone: string;
  message: string;
};

const initialValues: FormValues = {
  name: '',
  phone: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'At least 2 characters').required('Required'),
  phone: Yup.string()
    .max(15, 'No more than 15 characters')
    .matches(/^\+?[0-9 ()-]{7,15}$/, 'Invalid phone')
    .required('Required'),
  message: Yup.string().min(10, 'At least 10 characters').required('Required'),
});

const ContactForm: React.FC = () => {
  const [sent, setSent] = React.useState(false);

  const handleSubmit = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    await new Promise(r => setTimeout(r, 700));
    console.log('Contact form:', values);
    helpers.setSubmitting(false);
    helpers.resetForm();
    setSent(true);
    setTimeout(() => setSent(false), 10000);
  };

  return (
    <div className={styles.wrap}>
      {sent && (
        <div className={styles.success} role="status" aria-live="polite">
          Your message has been sent successfully :)
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={styles.form} noValidate>
            <label className={styles.field}>
              <Field
                className={`${styles.input} ${
                  touched.name && errors.name ? styles.inputError : ''
                }`}
                name="name"
                type="text"
                placeholder="Your Name"
                autoComplete="name"
                aria-invalid={!!(touched.name && errors.name)}
              />
              <ErrorMessage name="name">
                {msg => <span className={styles.errorBadge}>{msg}</span>}
              </ErrorMessage>
            </label>

            <label className={styles.field}>
              <Field
                className={`${styles.input} ${
                  touched.name && errors.name ? styles.inputError : ''
                }`}
                name="phone"
                type="tel"
                placeholder="Your Phone"
                autoComplete="tel"
                aria-invalid={!!(touched.phone && errors.phone)}
              />
              <ErrorMessage name="phone">
                {msg => <span className={styles.errorBadge}>{msg}</span>}
              </ErrorMessage>
            </label>

            <label className={styles.fieldtext}>
              <Field
                as="textarea"
                name="message"
                placeholder="Write To Me"
                className={`${styles.textarea} ${
                  touched.message && errors.message ? styles.inputError : ''
                }`}
                rows={6}
                aria-invalid={!!(touched.message && errors.message)}
              />
              <ErrorMessage name="message">
                {msg => <span className={styles.errorBadge}>{msg}</span>}
              </ErrorMessage>
            </label>

            <button
              className={styles.btn}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send me a Message'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
