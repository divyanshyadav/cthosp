import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik';
import BackButton from '../components/BackButton';

interface Patient {
  email: string;
}

interface Errors {
  email?: string;
}

export default function PatientDetailsPage() {
  const initialValues: Patient = { email: '' };
  return (
    <div>
      <BackButton />
      <h1>Patient details</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: Errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit} novalidate>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div>{errors.email && touched.email && errors.email}</div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
}
