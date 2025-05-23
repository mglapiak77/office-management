import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { mockIssues } from '../mocks';
import { Button, Card } from 'react-bootstrap';
import { Issue } from '../types/issue';

function IssueDetails() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const issue: Issue | undefined = mockIssues.find(i => i.id === Number(id));

  if (!issue) return <p>Nie znaleziono awarii.</p>;

  return (
    <>
      <Button variant="secondary" className="mb-3" onClick={() => history.push('/issues')}>
        &larr; Wróć
      </Button>

      <Card>
        <Card.Header>Szczegóły awarii</Card.Header>
        <Card.Body>
          <Card.Text>ID zasobu: {issue.resourceId}</Card.Text>
          <Card.Text>Opis: {issue.description}</Card.Text>
          <Card.Text>Data zgłoszenia: {issue.reportedDate}</Card.Text>
          <Card.Text>Status: {issue.status}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default IssueDetails;
