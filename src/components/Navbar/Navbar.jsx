import { Nav, Ul, Li, Bar, NavBar, NavbarUl, NavbarLi } from './style';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const barOnclickHandler = () => {
    setNav(!nav);
    setNavbar(!navbar);
  };
  return (
    <>
      {navbar && (
        <>
          <Nav>
            <Slide left>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <img
                  src={process.env.PUBLIC_URL + './img/logo.svg'}
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
        </>
      )}

      {nav && (
        <>
          <Nav>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img
                src={process.env.PUBLIC_URL + './img/whiteLogo.svg'}
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
          <NavBar>
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
          </NavBar>
        </>
      )}
    </>
  );
};

export default Navbar;
