import Banner from '../components/Home/Banner/Banner';
import Who from '../components/Home/Who/Who';
import How from '../components/Home/How/How';
import What from '../components/Home/What/What';
import Blog from '../components/Home/Blog/Blog';
import Clients from '../components/Home/Clients/Clients';
import Read from '../components/Home/Read/Read';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import style from '../components/css/style.module.scss';

const Home = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 3300 && window.scrollY <= 9300) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
      <Navbar />
      <Container
        fluid
        className={colorChange ? style.bgColorBlack : style.bgColorWhite}
        // style={{ padding: '0px' }}
      >
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
