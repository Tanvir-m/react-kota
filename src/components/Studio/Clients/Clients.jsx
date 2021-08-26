import { Row, Col, Container } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import ClientsCom from './ClientsCom';

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
            <ClientsCom img="1" />
            <ClientsCom img="2" />
            <ClientsCom img="3" />
            <ClientsCom img="4" p="2" />
            <ClientsCom img="5" p="2" />
            <ClientsCom img="6" p="2" />
          </Row>
          <Row>
            <ClientsCom img="7" p="2" />
            <ClientsCom img="8" />
            <ClientsCom img="9" />
            <ClientsCom img="10" />
            <ClientsCom img="11" p="2" />
            <ClientsCom img="12" />
          </Row>
          <Row>
            <ClientsCom img="13" />
            <ClientsCom img="14" />
            <ClientsCom img="15" />
            <ClientsCom img="16" p="2" />
            <ClientsCom img="17" p="2" />
            <ClientsCom img="18" />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Clients;
