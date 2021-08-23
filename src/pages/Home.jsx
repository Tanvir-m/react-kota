import Banner from '../components/Home/Banner/Banner';
import Who from '../components/Home/Who/Who';
import How from '../components/Home/How/How';
import What from '../components/Home/What/What';
import Blog from '../components/Home/Blog/Blog';
import Clients from '../components/Home/Clients/Clients';
import Read from '../components/Home/Read/Read';
import Footer from '../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container fluid>
        <Banner />
        <Who />
        <How />
        <What />
        <Blog />
        <Clients />
        <Read />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
