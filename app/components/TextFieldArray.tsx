import React from 'react';
import { Label, Button, FormGroup, Col } from 'reactstrap';
import { FieldArray } from 'formik';
import TextField from './TextField';

export default function TextFieldArray({
  label,
  name,
  values,
  touches,
  errors,
  onBlur,
  onChange,
}: TextFieldArrayProps) {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <FieldArray name={name}>
        {({ remove, push }) => {
          return (
            <FormGroup>
              {values.length > 0 &&
                values.map((value, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <FormGroup row key={`${name}.${index}`}>
                    <Col sm={10}>
                      <TextField
                        label=""
                        placeholder=""
                        value={value}
                        name={`${name}.${index}`}
                        error={
                          errors[index] && touches[index] ? errors[index] : ''
                        }
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </Col>

                    <Col>
                      <Button onClick={() => remove(index)}>Remove</Button>
                    </Col>
                  </FormGroup>
                ))}
              <Button onClick={() => push('')}>Add</Button>
            </FormGroup>
          );
        }}
      </FieldArray>
    </FormGroup>
  );
}

interface OnChange {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface OnFocus {
  (e: React.FocusEvent<HTMLInputElement>): void;
}

const defaultProps = {
  errors: new Array<string>(),
  values: new Array<string>(),
  touches: new Array<boolean>(),
};

type TextFieldArrayProps = {
  label: string;
  name: string;
  onChange: OnChange;
  onBlur: OnFocus;
  errors?: string[];
  values?: string[] | number[];
  touches?: boolean[];
} & typeof defaultProps;

TextFieldArray.defaultProps = defaultProps;
