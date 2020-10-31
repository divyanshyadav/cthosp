import React from 'react';
import { Alert, FormFeedback } from 'reactstrap';

interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  if (!message) {
    return null;
  }

  return <FormFeedback>{message}</FormFeedback>;

  return <Alert color="danger">{message}</Alert>;
}
