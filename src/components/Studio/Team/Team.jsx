import { Container, Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import TeamCom from './TeamCom';
import { studio } from '../../Data/Data';

const Team = () => {
  return (
    <>
      <Container>
        <Row className={style.teamRow}>
          <Col md={5}>
            <img src={process.env.PUBLIC_URL + '/img/studio/team.svg'} alt="" />
          </Col>
          <Col md={6}>
            <p>
              You will find our team working across Creative Web Design, Web
              Development, Branding, and Digital Marketing.
            </p>
          </Col>
        </Row>

        <Row>
          {studio.map((item) => (
            <TeamCom
              img={item.img}
              marTop={item.marTop}
              marLeft={item.marLeft}
              pad={item.pad}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Team;
