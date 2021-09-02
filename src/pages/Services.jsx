import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ServicesBan from '../components/Services/Services/Services';
import Card from '../components/Services/Card/Card';

const Services = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        <ServicesBan />
        <Card />
        <Footer />
      </Container>
    </>
  );
};

export default Services;
