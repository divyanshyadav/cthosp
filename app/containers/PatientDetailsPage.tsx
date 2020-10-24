import React from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { Formik } from 'formik';
import BackButton from '../components/BackButton';
import TextField from '../components/TextField';

interface Patient {
  firstName: string;
  middleName?: string;
  lastName?: string;
  age: number;
  gender: string;
  sonOf?: string;
  wifeOf?: string;
  daughterOf?: string;
  complains: Array<string>;
  examinations: Array<string>;
  investigations: Array<string>;
  provisionalDiagnosis: Array<string>;
  prescribedMedicines: Array<string>;
}

interface Errors {
  firstName?: string;
}

export default function PatientDetailsPage() {
  const initialValues: Patient = { firstName: '' };
  return (
    <div>
      <BackButton />
      <h1>Patient details</h1>
      <Formik
        initialValues={initialValues}
        validate={(values: Patient) => {
          const errors: Errors = {};
          if (!values.firstName) {
            errors.firstName = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(values, null, 2));
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
          <Form onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <TextField
                name="firstName"
                label="First Name"
                placeholder="Enter first name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={
                  errors.firstName && touched.firstName ? errors.firstName : ''
                }
              />
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
}
