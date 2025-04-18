import { Container, Row, Col } from "react-bootstrap";
import musicChill from "../assets/images/1a.png";
import musicLatin from "../assets/images/1b.png";
import "../scrollImages.css";

function News() {
  return (
    <Container fluid className=''>
      <Row className='d-flex'>
        <Col className=''>
          <h1>Novità</h1>
          <hr />
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col className='my-2'>
          <h5 className='fs-6 text-secondary'>NUOVA STAZIONE RADIO</h5>
          <h3>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h3>
          <img src={musicChill} alt='Apple Music Chill' width='500' />
        </Col>
        <Col className='my-2'>
          <h5 className='fs-6 text-secondary'>NUOVA STAZIONE RADIO</h5>
          <h3>Ecco la nuova casa della musica latina</h3>
          <img src={musicLatin} alt='Musica Latina' width='500' />
        </Col>
      </Row>
    </Container>
  );
}

export default News;
