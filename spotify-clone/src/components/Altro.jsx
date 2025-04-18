import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function Altro() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <span>Esplora per genere</span>
              <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <span>Worldwide</span>
              <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              Video musicali <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              Decenni <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              Classifiche <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              Nuovi artisti <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              Arrività e stati d'animo <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              Audio spaziale <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className='bg-middle text-danger fw-bold border-0 my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              Hit del passato <i className='bi bi-chevron-right'></i>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Altro;
