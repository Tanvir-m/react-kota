import { Container, Row, Col } from 'react-bootstrap';
import CardCom from './CardCom';
import style from '../../css/style.module.scss';

const Card = () => {
  return (
    <>
      <Container fluid className={style.cardRow}>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <CardCom
                img="1"
                head="Creative Web Design"
                para="Crafting beautiful websites that keep your users engaged."
              />
              <CardCom
                img="2"
                head="WebDevelopment"
                para="Building cutting edge websites that encompass the latest technology."
              />
              <CardCom
                img="3"
                head="Branding"
                para="Creating and evolving our favourite brands through great design."
              />
              <CardCom
                img="4"
                head="Digital Marketing"
                para="We create concepts and campaigns to make your brand succeed online."
              />
              <CardCom
                img="5"
                head="E-Commerce"
                para="Shopify powered E-Commerce websites converting users into customers."
              />
              <CardCom
                img="6"
                head="WordPress"
                para="We are experts at building and delivering bespoke WordPress solutions."
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
