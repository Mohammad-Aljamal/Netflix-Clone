import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import { useState } from 'react';
function Movie(props) {
  const [showModal,setShowModal] = useState(false);
  const [passItemToModal,setPassItemToModal] = useState ({});
  const handelShowModal = (item) =>{
    setShowModal(true);
    setPassItemToModal(item);
  }
  const handleClose = () =>{
    setShowModal(false)
  }

  return (
    <>
     <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={props.movieData.poster_path} />
            <Card.Body>
              <Card.Title><h3>{props.movieData.title}</h3></Card.Title>
              <Card.Text>
               <h5>{props.movieData.release_date}</h5>
               <h5>{props.movieData.overview}</h5>
              </Card.Text>
              <Button variant="primary" onClick={() => {handelShowModal(props.movieData)} }>Add to the favorite list</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <ModalMovie showFlag={showModal} item={passItemToModal} handleClose={handleClose}/>
    </>
  );
}

export default Movie;
