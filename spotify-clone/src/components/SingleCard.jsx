import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleCard({ title, image, artist }) {
  return (
    <Card style={{ width: "18rem", marginBottom: "1rem" }}>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
