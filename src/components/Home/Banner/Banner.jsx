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
              src={url + '/img/banner.png'}
              alt=""
              style={{ padding: '0px' }}
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
          <Col
            md={{ span: 3, offset: 1 }}
            className={style.award}
            style={{ zIndex: '10' }}
          >
            <Row>
              <Col sm={3}>
                <img
                  src={url + '/img/awdOne.webp'}
                  alt=""
                  className="img-fluid p-2 text-center"
                />
              </Col>
              <Col sm={3}>
                <img
                  src={url + '/img/awdTwo.webp'}
                  alt=""
                  className="img-fluid p-2 text-center"
                />
              </Col>
              <Col sm={3}>
                <img
                  src={url + '/img/awdThree.webp'}
                  alt=""
                  className="img-fluid p-2 text-center"
                />
              </Col>
              <Col sm={3}>
                <img
                  src={url + '/img/awdFour.webp'}
                  alt=""
                  className="img-fluid p-2 text-center"
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
