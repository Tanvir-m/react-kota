import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const How = () => {
  return (
    <>
      <Row className={style.howRow}>
        <Col md={{ span: 5, offset: 1 }} className={style.how}>
          <h4>01. WHO</h4>
          <h2>KOTA are specialists in:</h2>
          <h3>Creative Web Design</h3>
          <h3>Web Development</h3>
          <h3>Branding</h3>
          <h3>Digital Marketing</h3>
          <h3>E-commerce</h3>
          <h3>WordPress</h3>

          <button>VIEW OUR SERVICES</button>
        </Col>
        <Col md={6}>
          <img
            src={process.env.PUBLIC_URL + './img/how.png'}
            alt=""
            width="100%"
            height="auto"
          />
        </Col>
      </Row>
    </>
  );
};

export default How;
