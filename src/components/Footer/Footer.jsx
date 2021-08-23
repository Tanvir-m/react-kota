import { Container, Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const Footer = () => {
  return (
    <>
      <Container fluid className={style.footRow}>
        <Row>
          <Col md={{ span: 2, offset: 1 }}>
            <ul>
              <li className={style.home}>Home</li>
              <li>Work</li>
              <li>Services</li>
              <li>Studio</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={{ span: 2 }} className={style.footRowTwo}>
            <span>EXPERTS IN</span>
            <ul>
              <li>Hospitality</li>
              <li>Property and Acrchitecture</li>
              <li>Film and Television</li>
              <li>Business to Business</li>
            </ul>
          </Col>
          <Col md={{ span: 1, offset: 1 }} className={style.footRowThree}>
            <span>OFFICES</span>
            <ul>
              <li>London</li>
              <li>New York</li>
            </ul>
          </Col>
          <Col md={{ span: 3, offset: 2 }} className={style.footSoc}>
            <span>FOLLOW</span>
            <Row className={style.socRow}>
              <Col sm={{ span: 2 }}>
                <AiFillTwitterCircle />
              </Col>
              <Col sm={2}>
                <FiInstagram />
              </Col>
              <Col sm={2}>
                <RiFacebookCircleFill />
              </Col>
              <Col sm={2}>
                <TiSocialLinkedinCircular />
              </Col>
            </Row>
            <p>Sign up to our newsletter</p>
            <div>hello@kota.co.uk</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
