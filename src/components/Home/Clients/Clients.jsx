import { Row, Col, Container } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import ClientsCom from './ClientsCom';

const Clients = () => {
  return (
    <>
      <Container fluid>
        <Row className={style.clientRow}>
          <Col md={{ span: 5, offset: 1 }}>
            <h4>04. FOR</h4>
            <h2>Our Clients</h2>
          </Col>
        </Row>

        <Container>
          <Row>
            <ClientsCom img="1" col="2" />
            <ClientsCom img="2" col="2" />
            <ClientsCom img="3" col="2" />
            <ClientsCom img="4" col="2" p="2" />
            <ClientsCom img="5" col="2" p="2" />
            <ClientsCom img="6" col="2" p="2" />
          </Row>
          <Row>
            <ClientsCom img="7" col="2" p="2" />
            <ClientsCom img="8" col="2" />
            <ClientsCom img="9" col="2" />
            <ClientsCom img="10" col="2" />
            <ClientsCom img="11" col="2" p="2" />
            <ClientsCom img="12" col="2" />
          </Row>
          <Row>
            <ClientsCom img="13" col="2" />
            <ClientsCom img="14" col="2" />
            <ClientsCom img="15" col="2" />
            <ClientsCom img="16" col="2" p="2" />
            <ClientsCom img="17" col="2" p="2" />
            <ClientsCom img="18" col="2" />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Clients;
