import { Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import Tabs from './Tabs';
import Slide from 'react-reveal/Slide';

const GalCom = (props) => {
  return (
    <>
      <Col
        md={{ span: props.span, offset: props.offset }}
        className={`${style.GalCom} ${props.pad}`}
        style={{
          marginTop: `${props.mt}`,
        }}
      >
        <Slide bottom>
          <img
            src={process.env.PUBLIC_URL + `./img/${props.img}`}
            width="100%"
            height="auto"
          />

          <span>{props.one}</span>
          <span>{props.one}</span>
          <span>{props.three}</span>
          <h2>{props.head}</h2>
          <p>{props.para}</p>
        </Slide>
      </Col>
    </>
  );
};

export default GalCom;
