import style from '../../css/style.module.scss';
import { Col } from 'react-bootstrap';

const TeamCom = (props) => {
  return (
    <>
      <Col md={3}>
        <img
          style={{ marginTop: props.marTop, marginLeft: props.marLeft }}
          className={`img-fluid ${props.pad}`}
          src={process.env.PUBLIC_URL + `./img/studio/${props.img}.webp`}
          alt=""
        />
      </Col>
    </>
  );
};

export default TeamCom;
