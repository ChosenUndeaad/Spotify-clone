import { Container, Row, Col } from "react-bootstrap";
import musicChill from "../assets/images/1a.png";
import musicLatin from "../assets/images/1b.png";
import "../App.css";

function News() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className='text-start'>Novità</h1>
          <hr />
        </Col>
      </Row>

      <Row className='overflow-auto'>
        <div className='d-flex gap-4 px-3'>
          <Col
            xs={12}
            md={6}
            className='flex-shrink-0 d-flex justify-content-center mb-4'
            style={{ minWidth: "300px", maxWidth: "500px" }}
          >
            <div>
              <h5 className='fs-6 text-secondary'>NUOVA STAZIONE RADIO</h5>
              <h3>
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </h3>
              <img src={musicChill} alt='Apple Music Chill' width='100%' />
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className='flex-shrink-0 d-flex justify-content-center mb-4'
            style={{ minWidth: "300px", maxWidth: "500px" }}
          >
            <div>
              <h5 className='fs-6 text-secondary'>NUOVA STAZIONE RADIO</h5>
              <h3>Ecco la nuova casa della musica latina</h3>
              <img src={musicLatin} alt='Musica Latina' width='100%' />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default News;
