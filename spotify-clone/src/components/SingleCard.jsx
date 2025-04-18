import Card from "react-bootstrap/Card";

function SingleCard({ title, image, artist }) {
  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        src={image}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <Card.Body>
        <Card.Title className='text-truncate'>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
