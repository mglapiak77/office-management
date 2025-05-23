import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { mockRooms } from '../mocks';
import { Card, Button } from 'react-bootstrap';
import { Room } from '../types/room';

function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const room: Room | undefined = mockRooms.find(r => r.id === Number(id));

  if (!room) return <p>Nie znaleziono pomieszczenia.</p>;

  return (
    <>
      <Button variant="secondary" className="mb-3" onClick={() => history.push('/rooms')}>
        &larr; Wróć
      </Button>

      <Card>
        <Card.Header>Szczegóły pomieszczenia</Card.Header>
        <Card.Body>
          <Card.Title>{room.name}</Card.Title>
          <Card.Text>Piętro: {room.floor}</Card.Text>
          <Card.Text>Pojemność: {room.capacity}</Card.Text>
          <Card.Text>Opis: {room.description ?? 'Brak opisu'}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default RoomDetails;
