import React from 'react';
import { mockRooms } from '../mocks';
import { Table, Button } from 'react-bootstrap';
import { Room } from '../types/room';
import { Link } from 'react-router-dom';

function Rooms() {
  return (
    <>
      <h2 className="mb-4">Lista pomieszczeń</h2>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Nazwa</th>
            <th>Piętro</th>
            <th>Pojemność</th>
            <th>Szczegóły</th>
          </tr>
        </thead>
        <tbody>
          {mockRooms.map((room: Room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.name}</td>
              <td>{room.floor}</td>
              <td>{room.capacity}</td>
              <td>
                <Link to={`/rooms/${room.id}`}>
                  <Button variant="info" size="sm">
                    Szczegóły
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Rooms;
