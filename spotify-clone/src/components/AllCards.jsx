import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

function AllCards() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchTerm = "Powerwolf";

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`
        );
        const data = await res.json();
        setSongs(data.data.slice(0, 10));
      } catch (err) {
        console.error("Error fetching songs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <Container className='my-4' fluid>
      <h2 className='mb-3'>Nuove uscite di "{searchTerm}"</h2>
      {loading ? (
        <Spinner animation='border' variant='primary' />
      ) : (
        <Row>
          {songs.map((song) => (
            <Col key={song.id} xs={6} sm={4} md={3} lg={2} className='mb-4'>
              <SingleCard title={song.title} image={song.album.cover_medium} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default AllCards;
