import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import Slide from 'react-reveal/Slide';

const Studio = () => {
  return (
    <>
      <Row>
        <img
          className={style.workRow}
          src={process.env.PUBLIC_URL + './img/studio/stuBanner.png'}
          alt=""
        />
        <Col className={style.workText} md={{ span: 6, offset: 6 }}>
          <Slide bottom>
            <h1>We are experts in bringing brands to life digitally.</h1>
            <p>
              KOTA is a progressive and insightful design agency, technically
              and creatively skilled to translate your brand into its best
              digital self. Our design and development approach creates
              impactful, engaging brands and immersive digital experiences that
              bring you a return on creativity.
            </p>
          </Slide>
        </Col>
      </Row>
    </>
  );
};

export default Studio;
