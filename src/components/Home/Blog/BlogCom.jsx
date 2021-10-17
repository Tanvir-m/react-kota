import { Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import Slide from 'react-reveal/Slide';

const BlogCom = (props) => {
  return (
    <>
      <Col
        md={{ span: props.span, offset: props.offset }}
        className={`${style.blogCom} ${props.pad} `}
        style={{
          marginTop: `${props.mt}`,
        }}
      >
        <Slide bottom>
          <div className={style.hove}>
            <img
              src={process.env.PUBLIC_URL + `/img/${props.img}`}
              width="100%"
              height="auto"
            />
          </div>
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

export default BlogCom;
