import { Container, Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const Banner = () => {
  const url = process.env.PUBLIC_URL;
  return (
    <>
      <Container fluid>
        <Row>
          <img className={style.banRow} src={url + './img/banner.png'} alt="" />
          <Col className={style.bring} md={{ span: 6, offset: 6 }}>
            <h1>Bringing Brands to Life Digitally.</h1>
            <button>VIEW OUR WORK</button>
          </Col>
          <Col md={4}>
            <Row>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + './img/banOne.png}'}
                  alt=""
                />
              </Col>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + './img/banOne.png}'}
                  alt=""
                />
              </Col>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + './img/BanThree.png}'}
                  alt=""
                />
              </Col>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + './img/banOne.png}'}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
