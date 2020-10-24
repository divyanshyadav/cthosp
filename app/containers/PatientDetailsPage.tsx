import React from 'react';
import BackButton from '../components/BackButton';

export default function PatientDetailsPage() {
  return (
    <div>
      <BackButton />
      <h1>Patient form</h1>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}
