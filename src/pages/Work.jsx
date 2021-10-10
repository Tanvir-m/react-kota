import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import WorkCom from '../components/Work/Work/Work';
import TabGal from '../components/Work/TabGal/TabGal';
import Footer from '../components/Footer/Footer';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import { useEffect } from 'react';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavbarTwo />
      <Container fluid>
        <WorkCom />
        <TabGal />
        <Footer />
      </Container>
    </>
  );
};

export default Work;
