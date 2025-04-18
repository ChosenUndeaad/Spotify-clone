import Card from "react-bootstrap/Card";

function SingleCard({ title, image, artist }) {
  return (
    <Card className='bg-dark text-light border-0 rounded-3 h-100'>
      <div
        className='d-flex align-items-center justify-content-center'
        style={{ overflow: "hidden" }}
      >
        <Card.Img
          variant='top'
          src={image}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          className='rounded-4'
        />
      </div>
      <Card.Body>
        <Card.Title className='fs-6 mb-1 text-truncate' title={title}>
          {title || "Song Placeholder"}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
