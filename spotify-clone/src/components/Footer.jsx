import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function Footer() {
  return (
    <footer className='bg-middle py-4 mt-5'>
      <Container>
        <Row className='mb-3'>
          <Col className='d-flex flex-wrap'>
            <span className='me-2'>Italia |</span>
            <span>English (UK)</span>
          </Col>
        </Row>

        <Row className='mb-3'>
          <Col className='d-flex flex-wrap gap-3'>
            <span>© 2024 Apple Inc.</span>
            <span>Tutti i diritti riservati.</span>
          </Col>
        </Row>

        <Row>
          <Col className='d-flex flex-wrap text-light'>
            {[
              "Condizioni dei servizi internet",
              "Apple Music e privacy",
              "Avvio sui cookie",
              "Supporto",
              "Feedback",
            ].map((label, index, array) => (
              <a
                key={index}
                href='#'
                className={`text-light text-decoration-none px-2 ${
                  index !== array.length - 1 ? "border-end" : ""
                }`}
                style={{ borderColor: "#ccc" }}
              >
                {label}
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
