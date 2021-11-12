import { Container, Row, Col } from 'react-bootstrap';
import CardCom from './CardCom';
import style from '../../css/style.module.scss';
import { card } from '../../Data/Data';

const Card = () => {
  return (
    <>
      <Container fluid className={style.cardRow}>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              {card.map((item) => (
                <CardCom img={item.img} head={item.head} para={item.para} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
