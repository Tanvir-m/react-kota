import { Nav, Ul, Li, Bar, NavBar, NavbarUl, NavbarLi, Icons } from './style';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';

import { AiFillTwitterCircle } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const NavbarTwo = () => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const barOnclickHandler = () => {
    setNav(!nav);
    setNavbar(!navbar);
  };
  return (
    <>
      {navbar && (
        <Nav>
          <Slide left>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img
                src={process.env.PUBLIC_URL + '/img/logo.svg'}
                alt=""
                height="90px"
                width="90px"
              />
            </Link>
          </Slide>
          <Ul>
            <Slide right>
              <div>
                <Link to="/work" style={{ textDecoration: 'none' }}>
                  <Li>Work</Li>
                </Link>
                <Li>Contact</Li>
              </div>
            </Slide>
            <Bar>
              <RiBarChartHorizontalLine onClick={barOnclickHandler} />
            </Bar>
          </Ul>
        </Nav>
      )}

      {nav && (
        <>
          <Nav style={{ zIndex: '10000' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img
                src={process.env.PUBLIC_URL + '/img/whiteLogo.svg'}
                alt=""
                height="90px"
                width="90px"
              />
            </Link>
            <Ul>
              <Bar white>
                <FaTimes onClick={barOnclickHandler} />
              </Bar>
            </Ul>
          </Nav>
          <NavBar style={{ zIndex: '1000', width: '100%' }}>
            <NavbarUl>
              <Link to="/work" style={{ textDecoration: 'none' }}>
                <NavbarLi>Work</NavbarLi>
              </Link>
              <Link to="/services" style={{ textDecoration: 'none' }}>
                <NavbarLi>Services</NavbarLi>
              </Link>
              <Link to="/studio" style={{ textDecoration: 'none' }}>
                <NavbarLi>Studio</NavbarLi>
              </Link>
              <NavbarLi>Blog</NavbarLi>
              <NavbarLi>Contact</NavbarLi>
            </NavbarUl>
            <Icons left>
              <AiFillTwitterCircle />
            </Icons>
            <Icons>
              <FiInstagram />
            </Icons>
            <Icons>
              <RiFacebookCircleFill />
            </Icons>
            <Icons>
              <TiSocialLinkedinCircular />
            </Icons>
          </NavBar>
        </>
      )}
    </>
  );
};

export default NavbarTwo;
