import { Col } from 'react-bootstrap';

const ClientsCom = (props) => {
  return (
    <>
      <Col md={props.col} className="img-fluid mt-5 pt-4 text-center">
        <img
          className={`p-${props.p}`}
          height="50px"
          width="auto"
          src={process.env.PUBLIC_URL + `./img/clients/${props.img}.svg`}
          alt=""
        />
      </Col>
    </>
  );
};

export default ClientsCom;
