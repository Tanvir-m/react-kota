import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import Slide from 'react-reveal/Slide';

const Who = () => {
  const url = process.env.PUBLIC_URL;
  return (
    <>
      <Row className={style.whoRow}>
        <Col md={6} style={{ padding: '0px' }}>
          <Slide bottom>
            <img
              src={url + './img/who.png'}
              alt=""
              width="100%"
              height="1150"
              className={style.img}
            />
          </Slide>
        </Col>
        <Col md={6} className={style.who}>
          <h4>01. WHO</h4>
          <Slide bottom>
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
          </Slide>
        </Col>
      </Row>
    </>
  );
};

export default Who;
