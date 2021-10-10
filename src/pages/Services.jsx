import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import ServicesBan from '../components/Services/Services/Services';
import Card from '../components/Services/Card/Card';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavbarTwo />
      <Container fluid>
        <ServicesBan />
        <Card />
        <Footer />
      </Container>
    </>
  );
};

export default Services;
