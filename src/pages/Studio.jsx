import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import StudioBan from '../components/Studio/Studio/Studio';
import Video from '../components/Studio/Video/Video';
import Services from '../components/Studio/Services/Services';
import Gallery from '../components/Studio/Gallery/Gallery';
import Team from '../components/Studio/Team/Team';
import Clients from '../components/Studio/Clients/Clients';
import WhyChoose from '../components/Studio/WhyChoose/WhyChoose';

const Studio = () => {
  return (
    <>
      <Container fluid style={{ padding: '0px' }}>
        <Navbar />
        <StudioBan />
        <Video />
        <Services />
        <Gallery />
        <Team />
        <Clients />
        <WhyChoose />
        <Footer />
      </Container>
    </>
  );
};

export default Studio;
