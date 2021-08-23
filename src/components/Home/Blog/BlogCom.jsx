import { Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const BlogCom = (props) => {
  return (
    <>
      <Col
        md={{ span: props.span, offset: props.offset }}
        className={`${style.blogCom} ${props.pad}`}
        style={{
          marginTop: `${props.mt}`,
        }}
      >
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
      </Col>
    </>
  );
};

export default BlogCom;
