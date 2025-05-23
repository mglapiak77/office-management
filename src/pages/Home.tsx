import React from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';
import { companyInfo, officeImages } from '../mocks';

function Home() {
  return (
    <div className="text-center">
      <h1 className="display-4">
        <small className="text-muted">{companyInfo.name}</small>
      </h1>
      <p className="lead mb-4 fs-5">
        Aplikacja do zarządzania przestrzenią i zasobami biurowymi.
      </p>
      <Carousel className="mb-4 shadow rounded" style={{ maxHeight: '350px' }} interval={5000}>
        {officeImages.map(({ src, alt }, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={src}
              alt={alt}
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Dane firmy</Card.Title>
              <Card.Text>
                <strong>Rok założenia:</strong> {companyInfo.foundedYear} <br />
                <strong>Liczba pracowników:</strong> {companyInfo.employeesCount} <br />
                <strong>Liczba klientów:</strong> {companyInfo.clientsCount} <br />
                <strong>Adres:</strong> {companyInfo.address} <br />
                <strong>Email:</strong>{' '}
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a> <br />
                <strong>Telefon:</strong>{' '}
                <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
