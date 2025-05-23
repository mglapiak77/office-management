import React from 'react';
import { mockReservations } from '../mocks';
import { Table } from 'react-bootstrap';
import { Reservation } from '../types/reservation';

function Reservations() {
  return (
    <>
      <h2>Lista rezerwacji sal konferencyjnych</h2>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Numer pokoju</th>
            <th>Id pracownika</th>
            <th>Data</th>
            <th>Godzina rozpoczęcia</th>
            <th>Godzina zakończenia</th>
          </tr>
        </thead>
        <tbody>
          {mockReservations.map((r: Reservation) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.roomId}</td>
              <td>{r.employeeId}</td>
              <td>{r.date}</td>
              <td>{r.startTime}</td>
              <td>{r.endTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Reservations;