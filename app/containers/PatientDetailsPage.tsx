import React from 'react';
import { Button } from 'reactstrap';
import BackButton from '../components/BackButton';

export default function PatientDetailsPage() {
  return (
    <div>
      <BackButton />
      <h1>Patient form</h1>
      <Button color="danger">Danger!</Button>
    </div>
  );
}
