import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const Who = () => {
  const url = process.env.PUBLIC_URL;
  return (
    <>
      <Row className={style.whoRow}>
        <Col md={6}>
          <img src={url + './img/who.png'} alt="" width="100%" height="auto" />
        </Col>
        <Col md={6} className={style.who}>
          <h4>01. WHO</h4>
          <h2>
            A creative web design and branding agency based in London and New
            York.
          </h2>
          <p>
            We are KOTA, a full-service Creative Digital Agency who empower
            ambitious businesses. Our international team of experts specialise
            in Bespoke Websites, Branding and Digital Marketing.
          </p>
          <button>VIEW THE TEAM</button>
        </Col>
      </Row>
    </>
  );
};

export default Who;
