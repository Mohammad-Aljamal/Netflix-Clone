import Movie from "./Movie";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
function MovieList(props) {
    const [showCard,setShowCard] = useState(false);
    const [sendItem,setSendItem] = useState({});
    const cardStatus = (item) =>{
        setShowCard(true);
        setSendItem(item);
    }
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {props.trendingMovies.map((item, idx) => (
          <Col key={idx}>
                  <Button variant="light" onClick ={() => {cardStatus(item)}}>

            <Card >
              <Card.Img variant="top" src={item.poster_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.overview}</Card.Text>
              </Card.Body>
            </Card>
            </Button>{' '}
          </Col>
        ))}
      </Row>

      <Movie showFlag={showCard} trendingMovie={sendItem} />
    </>
  );
}

export default MovieList;
