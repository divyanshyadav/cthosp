import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';
import Error from './Error';

interface OnChange {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface OnFocus {
  (e: React.FocusEvent<HTMLInputElement>): void;
}

interface SelectProps {
  label: string;
  name: string;
  error: string;
  onChange: OnChange;
  onBlur: OnFocus;
  value: string;
  options: Array<string>;
}

export default function Select({
  name,
  label,
  options,
  error,
  ...rest
}: SelectProps) {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input type="select" name={name} id={name} invalid={!!error} {...rest}>
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </Input>
      <Error message={error} />
    </FormGroup>
  );
}
