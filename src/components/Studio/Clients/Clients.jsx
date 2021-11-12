import { Row, Col, Container } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import ClientsCom from './ClientsCom';
import { client } from '../../Data/Data';

const Clients = () => {
  return (
    <>
      <Container fluid>
        <Row className={style.clientRow}>
          <Col md={{ span: 5, offset: 1 }}>
            <h2>Our Clients</h2>
          </Col>
        </Row>

        <Container>
          <Row>
            {client.map((item) => (
              <ClientsCom img={item.img} col={item.col} p={item.p} />
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Clients;
