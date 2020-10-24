import React from 'react';
import { Form, FormGroup, Button, Row, Col } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import BackButton from '../components/BackButton';
import TextField from '../components/TextField';

interface Patient {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  gender: string;
  relativeName: string;
  relativeType: 'S/O' | 'W/O' | 'D/O';
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
  const initialValues: Patient = { firstName: '', lastName: '' };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <div>
      <BackButton />
      <h1>Patient Details</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
            <Row form>
              <Col>
                <FormGroup>
                  <TextField
                    name="firstName"
                    label="First Name"
                    placeholder="eg. Red"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    error={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : ''
                    }
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    placeholder="eg. John"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    error={
                      errors.lastName && touched.lastName ? errors.lastName : ''
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
