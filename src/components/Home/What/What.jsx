import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const What = () => {
  return (
    <>
      <Row className={style.whatRow}>
        <Col md={{ span: 4, offset: 2 }}>
          <img
            className="p-5"
            src={process.env.PUBLIC_URL + '/img/work.svg'}
            alt=""
            width="100%"
            height="auto"
          />
        </Col>
        <Col md={{ span: 5, offset: 1 }} className={style.what}>
          <h4>01. WHAT</h4>
          <h2>We are experts in bringing brands to life digitally.</h2>
          <p>
            KOTA is a progressive and insightful design agency, technically and
            creatively skilled to translate your brand into its best digital
            self. Our design and development approach creates impactful,
            engaging brands and immersive digital experiences that bring you a
            return on creativity.
          </p>
          <button>VIEW OUR WORK</button>
        </Col>
      </Row>
    </>
  );
};

export default What;
