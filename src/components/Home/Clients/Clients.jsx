import { Row, Col, Container } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import ClientsCom from './ClientsCom';
import Slide from 'react-reveal/Slide';
import { client } from '../../Data/Data';

const Clients = () => {
  return (
    <>
      <Container fluid>
        <Row className={style.clientRow}>
          <Col md={{ span: 5, offset: 1 }}>
            <h4>04. FOR</h4>
            <Slide bottom>
              <h2>Our Clients</h2>
            </Slide>
          </Col>
        </Row>

        <Container>
          <Slide bottom>
            <Row>
              {client.map((item) => (
                <ClientsCom img={item.img} col={item.col} p={item.p} />
              ))}
            </Row>
          </Slide>
        </Container>
      </Container>
    </>
  );
};

export default Clients;
