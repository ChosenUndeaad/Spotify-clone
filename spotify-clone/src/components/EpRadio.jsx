import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/images/2a.png";
import img2 from "../assets/images/2b.png";
import img3 from "../assets/images/2c.png";
import img4 from "../assets/images/2d.png";
import img5 from "../assets/images/2e.png";
import img6 from "../assets/images/2f.png";
import "../scrollImages.css";

function EpRadio() {
  return (
    <Container fluid className='mb-5'>
      <Row>
        <Col>
          <h3>Nuovi episodi radio</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='singleLineImageContainer'>
            <img src={img1} alt='' width='300' className='m-1 image' />
            <img src={img2} alt='' width='300' className='m-1 image' />
            <img src={img3} alt='' width='300' className='m-1 image' />
            <img src={img4} alt='' width='300' className='m-1 image' />
            <img src={img5} alt='' width='300' className='m-1 image' />
            <img src={img6} alt='' width='300' className='m-1 image' />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EpRadio;
