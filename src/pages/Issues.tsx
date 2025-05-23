import React from 'react';
import { mockIssues } from '../mocks';
import { Table, Button } from 'react-bootstrap';
import { Issue } from '../types/issue';
import { Link } from 'react-router-dom';

function Issues() {
  return (
    <>
      <h2>Lista awarii sprzętowych</h2>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Id zasobu</th>
            <th>Opis</th>
            <th>Data zgłoszenia</th>
            <th>Status</th>
            <th>Szczegóły</th>
          </tr>
        </thead>
        <tbody>
          {mockIssues.map((issue: Issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.resourceId}</td>
              <td>{issue.description}</td>
              <td>{issue.reportedDate}</td>
              <td>{issue.status}</td>
              <td>
                <Link to={`/issues/${issue.id}`}>
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

export default Issues;
