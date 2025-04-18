import { Container, Row, Col } from "react-bootstrap";
import musicChill from "../assets/images/1a.png";
import musicLatin from "../assets/images/1b.png";

function News() {
  return (
    <Container fluid className=''>
      <Row className='d-flex'>
        <Col className=''>
          <h1>Novità</h1>
          <hr />
        </Col>
      </Row>
      <Row className=''>
        <Col className=''>
          <h4>nuova stazione radio</h4>
          <h3>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h3>
          <img src={musicChill} alt='Apple Music Chill' width='500' />
        </Col>
        <Col className=''>
          <h4>nuova stazione radio</h4>
          <h3>Ecco la nuova casa della musica latina</h3>
          <img src={musicLatin} alt='Musica Latina' width='500' />
        </Col>
      </Row>
    </Container>
  );
}

export default News;
