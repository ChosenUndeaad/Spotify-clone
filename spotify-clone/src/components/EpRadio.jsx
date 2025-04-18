import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/images/2a.png";
import img2 from "../assets/images/2b.png";
import img3 from "../assets/images/2c.png";
import img4 from "../assets/images/2d.png";
import img5 from "../assets/images/2e.png";
import img6 from "../assets/images/2f.png";

function EpRadio() {
  return (
    <Container fluid className=''>
      <Row>
        <Col>
          <h3>Nuovi episodi radio</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={img1} alt='' width='400' className='m-1' />
          <img src={img2} alt='' width='400' className='m-1' />
          <img src={img3} alt='' width='400' className='m-1' />
          <img src={img4} alt='' width='400' className='m-1' />
          <img src={img5} alt='' width='400' className='m-1' />
        </Col>
      </Row>
    </Container>
  );
}

export default EpRadio;
