import React from 'react';
import { mockResources } from '../mocks';
import { Table } from 'react-bootstrap';
import { Resource } from '../types/resource';

function Resources() {
  return (
    <>
      <h2>Zasoby biurowe</h2>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Typ</th>
            <th>Nazwa</th>
            <th>Lokalizacja</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockResources.map((res: Resource) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.type}</td>
              <td>{res.name}</td>
              <td>{res.location}</td>
              <td>{res.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Resources;
