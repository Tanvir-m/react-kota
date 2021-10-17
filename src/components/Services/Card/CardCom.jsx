import { Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const CardCom = (props) => {
  return (
    <>
      <Col md={4} className={`${style.cardCom} mt-5`}>
        <img
          src={process.env.PUBLIC_URL + `/img/services/${props.img}.webp`}
          width="100%"
          height="auto"
        />
        <h2>{props.head}</h2>
        <p>{props.para}</p>
      </Col>
    </>
  );
};

export default CardCom;
