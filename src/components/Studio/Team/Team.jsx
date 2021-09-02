import { Container, Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import TeamCom from './TeamCom';

const Team = () => {
  return (
    <>
      <Container>
        <Row className={style.teamRow}>
          <Col md={5}>
            <img
              src={process.env.PUBLIC_URL + './img/studio/team.svg'}
              alt=""
            />
          </Col>
          <Col md={6}>
            <p>
              You will find our team working across Creative Web Design, Web
              Development, Branding, and Digital Marketing.
            </p>
          </Col>
        </Row>

        <Row>
          <TeamCom img="tm1" marTop="200px" pad="p-4" />
          <TeamCom img="tm2" marTop="100px" />
          <TeamCom img="tm3" marTop="-100px" />
          <TeamCom img="tm4" marTop="0px" pad="p-4" />

          <TeamCom img="tm5" marTop="" pad="p-3" />
          <TeamCom img="tm6" marTop="-50px" pad="p-3" />
          <TeamCom img="tm7" marTop="-280px" pad="p-3" />
          <TeamCom img="tm8" marTop="-150px" marLeft="-20px" pad="p-3" />

          <TeamCom />
          <TeamCom />
          <TeamCom img="tm9" marTop="-250px" marLeft="-30px" pad="p-3" />
          <TeamCom img="tm10" marTop="-120px" marLeft="-40px" pad="p-3" />
        </Row>
      </Container>
    </>
  );
};

export default Team;
