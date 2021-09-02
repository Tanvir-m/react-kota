import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import Slide from 'react-reveal/Slide';

const Services = () => {
  return (
    <>
      <Row className={style.stuSer}>
        <Col md={{ span: 8, offset: 2 }}>
          <Slide bottom>
            <h2>KOTA are talented creatives that take business seriously.</h2>
            <p>
              Our expert team is made up of creatives with technical knowhow,
              strategists who think outside the box, and developers who push
              innovation. And then there’s Buddy, the French Bulldog.
            </p>
            <button>VIEW OUR SERVICES</button>
          </Slide>
        </Col>
      </Row>
    </>
  );
};

export default Services;
