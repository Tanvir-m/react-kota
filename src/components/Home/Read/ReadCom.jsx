import { Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const ReadCom = (props) => {
  return (
    <>
      <Col md={4} className={`${style.readCom} mt-5`}>
        <img
          className="img-fluid pb-4"
          src={process.env.PUBLIC_URL + `./img/clients/${props.img}.webp`}
          alt=""
        />
        <span>{props.span}</span>
        <span>{props.span2}</span>
        <h2>{props.head}</h2>
      </Col>
    </>
  );
};

export default ReadCom;
