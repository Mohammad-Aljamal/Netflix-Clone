import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Movie(props) {
  return (
    <>
      <Card show={props.showFlag} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.trendingMovie.poster_path} />
        <Card.Body>
          <Card.Title>{props.trendingMovie.title}</Card.Title>
          <Card.Text>{props.trendingMovie.overview}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Movie;
