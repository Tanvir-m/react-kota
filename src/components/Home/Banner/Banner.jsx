import { Container, Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Banner = () => {
  const url = process.env.PUBLIC_URL;
  return (
    <>
      <Container fluid style={{ padding: '0px' }}>
        <Row>
          <Zoom top>
            <img
              className={style.banRow}
              src={url + './img/banner.png'}
              alt=""
            />
          </Zoom>
          <Col className={style.bring} md={{ span: 6, offset: 6 }}>
            <Fade bottom>
              <h1>
                Bringing Brands <br /> to Life Digitally.
              </h1>

              <button>VIEW OUR WORK</button>
            </Fade>
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
