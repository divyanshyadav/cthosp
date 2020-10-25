import React from 'react';
import { Form, FormGroup, Button, Col } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import BackButton from '../components/BackButton';
import TextField from '../components/TextField';
import Select from '../components/Select';
import TextFieldArray from '../components/TextFieldArray';

interface Patient {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  gender: string;
  relativeRelation: 'S/O' | 'W/O' | 'D/O' | '';
  relativeName: string;
  complains: Array<string>;
  examinations: Array<string>;
  investigations: Array<string>;
  provisionalDiagnosis: Array<string>;
  prescribedMedicines: Array<string>;
}

export default function PatientDetailsPage() {
  const initialValues: Patient = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    age: '',
    relativeRelation: '',
    relativeName: '',
    examinations: [],
    investigations: [],
    provisionalDiagnosis: [],
    prescribedMedicines: [],
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    middleName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    gender: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    relativeRelation: Yup.string(),
    relativeName: Yup.string(),
    examinations: Yup.array().of(Yup.string().required('Required')),
    investigations: Yup.array().of(Yup.string().required('Required')),
    provisionalDiagnosis: Yup.array().of(Yup.string().required('Required')),
    prescribedMedicines: Yup.array().of(Yup.string().required('Required')),
  });

  return (
    <div>
      <BackButton />
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
        }) => {
          return (
            <Form onSubmit={handleSubmit} noValidate>
              <FormGroup>
                <Col>
                  <h1>Patient Details</h1>
                </Col>
                <Col>
                  <FormGroup row>
                    <Col sm={4}>
                      <TextField
                        name="firstName"
                        label="First Name"
                        placeholder="eg. Raj"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        error={
                          errors.firstName && touched.firstName
                            ? errors.firstName
                            : ''
                        }
                      />
                    </Col>
                    <Col sm={4}>
                      <TextField
                        name="middleName"
                        label="Middle Name"
                        placeholder="eg. Kumar"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.middleName}
                        error={
                          errors.middleName && touched.middleName
                            ? errors.middleName
                            : ''
                        }
                      />
                    </Col>
                    <Col sm={4}>
                      <TextField
                        name="lastName"
                        label="Last Name"
                        placeholder="eg. Rao"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        error={
                          errors.lastName && touched.lastName
                            ? errors.lastName
                            : ''
                        }
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={2}>
                      <Select
                        name="gender"
                        label="Gender"
                        options={['Male', 'Female']}
                        value={values.gender}
                        error={
                          errors.gender && touched.gender ? errors.gender : ''
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                    <Col sm={2}>
                      <TextField
                        type="number"
                        name="age"
                        label="Age"
                        placeholder="eg. 30"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                        error={errors.age && touched.age ? errors.age : ''}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={3}>
                      <Select
                        name="relativeRelation"
                        label="Relative Relation"
                        options={['S/O', 'W/O', 'D/O']}
                        value={values.relativeRelation}
                        error={
                          errors.relativeRelation && touched.relativeRelation
                            ? errors.relativeRelation
                            : ''
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                    <Col sm={5}>
                      <TextField
                        name="relativeName"
                        label="Relative Name"
                        placeholder="eg. Shiv Kumar Singh"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.relativeName}
                        error={
                          errors.relativeName && touched.relativeName
                            ? errors.relativeName
                            : ''
                        }
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <TextFieldArray
                        name="examinations"
                        label="Examinations"
                        values={
                          Array.isArray(values.examinations)
                            ? values.examinations
                            : undefined
                        }
                        errors={
                          Array.isArray(errors.examinations)
                            ? errors.examinations
                            : undefined
                        }
                        touches={
                          Array.isArray(touched.examinations)
                            ? touched.examinations
                            : undefined
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <TextFieldArray
                        values={
                          Array.isArray(values.investigations)
                            ? values.investigations
                            : undefined
                        }
                        name="investigations"
                        label="Investigations"
                        errors={
                          Array.isArray(errors.investigations)
                            ? errors.investigations
                            : undefined
                        }
                        touches={
                          Array.isArray(touched.investigations)
                            ? touched.investigations
                            : undefined
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <TextFieldArray
                        values={
                          Array.isArray(values.provisionalDiagnosis)
                            ? values.provisionalDiagnosis
                            : undefined
                        }
                        name="provisionalDiagnosis"
                        label="Provisional Diagnosis"
                        errors={
                          Array.isArray(errors.provisionalDiagnosis)
                            ? errors.provisionalDiagnosis
                            : undefined
                        }
                        touches={
                          Array.isArray(touched.provisionalDiagnosis)
                            ? touched.provisionalDiagnosis
                            : undefined
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <TextFieldArray
                        values={
                          Array.isArray(values.prescribedMedicines)
                            ? values.prescribedMedicines
                            : undefined
                        }
                        name="prescribedMedicines"
                        label="Prescribed Medicines"
                        errors={
                          Array.isArray(errors.prescribedMedicines)
                            ? errors.prescribedMedicines
                            : undefined
                        }
                        touches={
                          Array.isArray(touched.prescribedMedicines)
                            ? touched.prescribedMedicines
                            : undefined
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                  </FormGroup>
                  <Button type="submit" color="primary" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
