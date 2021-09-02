import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import { BiPlayCircle } from 'react-icons/bi';

const Video = () => {
  return (
    <>
      <Row className={style.vidRow} style={{ margin: '250px 0 200px 0' }}>
        <Col md={12} style={{ padding: '0px' }}>
          <center>
            <BiPlayCircle className={style.playBtn} />
          </center>

          <video autoplay loop>
            <source
              src={process.env.PUBLIC_URL + './img/studio/studVideo.mp4'}
              type="video/mp4"
            />
          </video>
        </Col>
      </Row>
    </>
  );
};

export default Video;
