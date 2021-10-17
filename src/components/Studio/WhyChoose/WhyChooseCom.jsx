import { Col } from 'react-bootstrap';

const WhyChooseCom = (props) => {
  return (
    <>
      <Col md={4}>
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + `/img/studio/${props.img}.webp`}
          alt=""
        />
      </Col>
    </>
  );
};

export default WhyChooseCom;
