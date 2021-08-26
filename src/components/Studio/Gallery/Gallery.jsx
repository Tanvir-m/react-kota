import { Row, Col, Container } from 'react-bootstrap';
import GalCom from './GalCom';

const Gallery = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Row>
              <GalCom img="gl1" />
            </Row>
            <Row>
              <GalCom img="gl2" />
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <GalCom img="gl3" />
            </Row>
            <Row>
              <GalCom img="gl4" />
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <GalCom img="gl5" />
            </Row>
            <Row>
              <GalCom img="gl6" />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
