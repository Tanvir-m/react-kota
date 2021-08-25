import { Col, Card } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const ReadCom = (props) => {
  return (
    <>
      <Col md={4} className={`${style.readCom} mt-5`}>
        <Card style={{ width: '25rem', height: '25rem' }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + `./img/clients/${props.img}.webp`}
          />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              <span>{props.span}</span>
              <span>{props.span2}</span>
              <h2>{props.head}</h2>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        {/* <img
          className="img-fluid pb-4"
          src={process.env.PUBLIC_URL + `./img/clients/${props.img}.webp`}
          alt=""
        /> */}
      </Col>
    </>
  );
};

export default ReadCom;
