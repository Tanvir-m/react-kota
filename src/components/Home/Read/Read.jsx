import { Row, Col, Container } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import ReadCom from './ReadCom';

const Read = () => {
  return (
    <>
      <Container fluid className={style.readRow}>
        <Row>
          <Col md={{ span: 5, offset: 1 }}>
            <h4>04. READ</h4>
            <h2>Our Latest Articles</h2>
          </Col>
        </Row>
        <Container>
          <Row>
            <ReadCom
              img="article-1"
              span="EXPERTISE"
              head="10 signs you probably need a new website."
            />
            <ReadCom
              img="article-2"
              span="EXPERTISE"
              span="STUDIO"
              head="How long does it take to design and build a website?"
            />
            <ReadCom
              img="article-3"
              span="EXPERTISE"
              head="Behind the scenes at KOTA: Web Design process."
            />
          </Row>
          <center>
            <button>VIEW ALL BLOG POSTS</button>
          </center>
        </Container>
      </Container>
    </>
  );
};

export default Read;
