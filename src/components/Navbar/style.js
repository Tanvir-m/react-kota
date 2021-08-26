import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;
  padding: 3% 3% 3% 3%;
  position: fixed;
  z-index: 1;
`;

export const Ul = styled.ul`
  float: right;
`;

export const Li = styled.li`
  display: inline;
  list-style: none;
  color: ${(props) => (props.white ? 'white' : 'rgb(135, 135, 135)')};
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: bold;
  transition: color 0.15s ease 0s;
  margin-right: 70px;
  font-family: 'Rubik', sans-serif;
`;

export const Bar = styled.div`
  float: right;
  font-size: 3rem;
  color: ${(props) => (props.white ? 'white' : 'rgb(135, 135, 135)')};
  margin-top: -20px;
  cursor: pointer;
  /* z-index: 11; */
`;

export const NavBar = styled.div`
  background-color: rgb(247, 78, 161);
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 0px;
  /* z-index: 10; */
`;

export const NavbarUl = styled.ul`
  padding: 10% 0 0 20%;
`;
export const NavbarLi = styled.li`
  display: block;
  font-size: 6rem;
  margin-top: 40px;
  font-weight: bold;
  line-height: 0.8;
  letter-spacing: -0.08rem;
  color: rgba(0, 0, 0, 0.25);
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;

  &:hover {
    color: white;
  }
`;
