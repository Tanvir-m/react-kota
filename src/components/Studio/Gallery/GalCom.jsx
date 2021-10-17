import { Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const GalCom = (props) => {
  return (
    <>
      <Col sm={12} className={style.galCom} style={{ padding: '0px' }}>
        <img
          src={process.env.PUBLIC_URL + `/img/studio/${props.img}.webp`}
          className="img-fluid"
          alt=""
        />
      </Col>
    </>
  );
};

export default GalCom;
