import React from 'react';
import { Label, Input, Alert } from 'reactstrap';

interface OnChange {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface OnFocus {
  (e: React.FocusEvent<HTMLInputElement>): void;
}

interface TextFieldProps {
  label: string;
  name: string;
  error: string;
  placeholder: string;
  onChange: OnChange;
  onBlur: OnFocus;
  value: string;
}

export default function TextField({
  label,
  name,
  error,
  ...rest
}: TextFieldProps) {
  return (
    <div>
      <Label for={name}>{label}</Label>
      <Input type="text" name={name} id={name} invalid={!!error} {...rest} />
      {error ? <Alert color="danger">{error}</Alert> : null}
    </div>
  );
}
