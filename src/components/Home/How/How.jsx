import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import Slide from 'react-reveal/Slide';

const How = () => {
  return (
    <>
      <Row className={style.howRow}>
        <Col md={{ span: 5, offset: 1 }} className={style.how}>
          <h4>02. How</h4>
          <Slide bottom>
            <h2>KOTA are specialists in:</h2>

            <Slide bottom cascade>
              <h3>Creative Web Design</h3>
              <h3>Web Development</h3>
              <h3>Branding</h3>
              <h3>Digital Marketing</h3>
              <h3>E-commerce</h3>
              <h3>WordPress</h3>
            </Slide>

            <button>VIEW OUR SERVICES</button>
          </Slide>
        </Col>
        <Col md={6} style={{ padding: '0px' }}>
          <Slide bottom>
            <img
              src={process.env.PUBLIC_URL + '/img/how.png'}
              alt=""
              width="100%"
              height="1150"
            />
          </Slide>
        </Col>
      </Row>
    </>
  );
};

export default How;
