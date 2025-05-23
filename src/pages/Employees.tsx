import React from 'react';
import { mockEmployees } from '../mocks';
import { Table, Button } from 'react-bootstrap';
import { Employee } from '../types/employee';
import { Link } from 'react-router-dom';

function Employees() {
  return (
    <>
      <h2>Lista pracowników</h2>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Imię i nazwisko</th>
            <th>Stanowisko</th>
            <th>Email</th>
            <th>Szczegóły</th>
          </tr>
        </thead>
        <tbody>
          {mockEmployees.map((emp: Employee) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.email}</td>
              <td>
                <Link to={`/employees/${emp.id}`}>
                  <Button variant="info" size="sm">Szczegóły</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Employees;
