import { Container, Row, Col } from "react-bootstrap";
import musicChill from "../assets/images/1a.png";
import musicLatin from "../assets/images/1b.png";
import "../scrollImages.css";

function News() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className='text-start'>Novità</h1>
          <hr />
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col md={5} className='text-start mb-4'>
          <h5 className='fs-6 text-secondary'>NUOVA STAZIONE RADIO</h5>
          <h3>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h3>
          <img src={musicChill} alt='Apple Music Chill' width='100%' />
        </Col>
        <Col md={5} className='text-start mb-4'>
          <h5 className='fs-6 text-secondary'>NUOVA STAZIONE RADIO</h5>
          <h3>Ecco la nuova casa della musica latina</h3>
          <img src={musicLatin} alt='Musica Latina' width='100%' />
        </Col>
      </Row>
    </Container>
  );
}

export default News;
