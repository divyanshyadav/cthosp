import React from 'react';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
import { Formik } from 'formik';
import BackButton from '../components/BackButton';

interface TextFieldProps {
  label: string;
  name: string;
  error: string;
}

function TextField({ label, name, error, ...rest }: TextFieldProps) {
  return (
    <div>
      <Label for={name}>{label}</Label>
      <Input type="text" name={name} id={name} {...rest} />
      {error ? <Alert color="danger">{error}</Alert> : null}
    </div>
  );
}

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
          <Form onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <TextField
                name="firstName"
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
