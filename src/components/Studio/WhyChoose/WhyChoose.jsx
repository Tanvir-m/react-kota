import WhyChooseCom from './WhyChooseCom';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const WhyChoose = () => {
  return (
    <>
      <Container fluid className={style.whyChoose}>
        <Row>
          <h3 className="py-5">Why Choose Kota</h3>
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <WhyChooseCom img="wh1" />
              <WhyChooseCom img="wh2" />
              <WhyChooseCom img="wh3" />
            </Row>
          </Col>
          <h2>INTEGRITY</h2>
          <p className="text-center">
            We care about our work, our clients and our people. We treat
            everyone <br /> with honesty and respect and expect to be treated in
            the same way.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default WhyChoose;
