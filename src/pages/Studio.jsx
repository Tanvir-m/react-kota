import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import StudioBan from '../components/Studio/Studio/Studio';
import Video from '../components/Studio/Video/Video';
import Services from '../components/Studio/Services/Services';
import Gallery from '../components/Studio/Gallery/Gallery';
import Team from '../components/Studio/Team/Team';
import Clients from '../components/Studio/Clients/Clients';
import WhyChoose from '../components/Studio/WhyChoose/WhyChoose';
import { useState } from 'react';
import style from '../components/css/style.module.scss';
import { useEffect } from 'react';

const Studio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 3300 && window.scrollY <= 5000) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <NavbarTwo />
      <Container
        fluid
        className={colorChange ? style.bgColorBlack : style.bgColorWhite}
      >
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
