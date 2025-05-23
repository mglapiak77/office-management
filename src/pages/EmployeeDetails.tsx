import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { mockEmployees } from '../mocks';
import { Button, Card } from 'react-bootstrap';
import { Employee } from '../types/employee';

function EmployeeDetails() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const employee: Employee | undefined = mockEmployees.find(e => e.id === Number(id));

  if (!employee) return <p>Nie znaleziono pracownika.</p>;

  return (
    <>
      <Button variant="secondary" className="mb-3" onClick={() => history.push('/employees')}>
        &larr; Wróć
      </Button>

      <Card>
        <Card.Header>Szczegóły pracownika</Card.Header>
        <Card.Body>
          <Card.Title>{employee.name}</Card.Title>
          <Card.Text>Stanowisko: {employee.position}</Card.Text>
          <Card.Text>Email: {employee.email}</Card.Text>
          <Card.Text>Telefon: {employee.phone ?? 'Brak danych'}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default EmployeeDetails;
