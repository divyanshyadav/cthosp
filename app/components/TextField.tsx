import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';
import Error from './Error';

interface OnChange {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface OnFocus {
  (e: React.FocusEvent<HTMLInputElement>): void;
}

export default function TextField({
  type,
  label,
  name,
  error,
  ...rest
}: TextFieldProps) {
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input type={type} name={name} id={name} invalid={!!error} {...rest} />
      <Error message={error} />
    </FormGroup>
  );
}

interface TextFieldProps {
  type?: 'text' | 'number';
  label: string;
  name: string;
  error: string;
  placeholder: string;
  onChange: OnChange;
  onBlur: OnFocus;
  value: string | number;
}

TextField.defaultProps = {
  type: 'text',
};
