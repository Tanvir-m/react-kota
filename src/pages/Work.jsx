import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import WorkCom from '../components/Work/Work/Work';
import TabGal from '../components/Work/TabGal/TabGal';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Work = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        <WorkCom />
        <TabGal />
        <Footer />
      </Container>
    </>
  );
};

export default Work;
