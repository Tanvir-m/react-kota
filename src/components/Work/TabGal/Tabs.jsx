import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../../context/context';
import style from '../../css/style.module.scss';
import Fade from 'react-reveal/Fade';

const Tabs = () => {
  const context = useContext(Context);

  const [actAll, setActAll] = useState(true);
  const [actBrand, setActBrand] = useState(false);
  const [actDm, setActDm] = useState(false);
  const [actWeb, setActWeb] = useState(false);

  const allClickHandler = () => {
    context.tabGal.setBrand(false);
    context.tabGal.setDm(false);
    context.tabGal.setWeb(false);
    context.tabGal.setAll(true);

    setActAll(true);
    setActBrand(false);
    setActDm(false);
    setActWeb(false);
  };

  const brandClickHandler = () => {
    context.tabGal.setBrand(true);
    context.tabGal.setDm(false);
    context.tabGal.setWeb(false);
    context.tabGal.setAll(false);
    setActAll(false);
    setActBrand(true);
    setActDm(false);
    setActWeb(false);
  };

  const dmClickHandler = () => {
    context.tabGal.setBrand(false);
    context.tabGal.setDm(true);
    context.tabGal.setWeb(false);
    context.tabGal.setAll(false);

    setActAll(false);
    setActBrand(false);
    setActDm(true);
    setActWeb(false);
  };

  const webClickHandler = () => {
    context.tabGal.setBrand(false);
    context.tabGal.setDm(false);
    context.tabGal.setWeb(true);
    context.tabGal.setAll(false);

    setActAll(false);
    setActBrand(false);
    setActDm(false);
    setActWeb(true);
  };
  return (
    <>
      <Fade bottom>
        <ul>
          <li onClick={allClickHandler} className={actAll && `${style.active}`}>
            All
          </li>
          <li
            onClick={brandClickHandler}
            className={actBrand && `${style.active}`}
          >
            Branding
          </li>
          <li onClick={dmClickHandler} className={actDm && `${style.active}`}>
            Digital Marketing
          </li>
          <li onClick={webClickHandler} className={actWeb && `${style.active}`}>
            Websites
          </li>
        </ul>
      </Fade>
    </>
  );
};

export default Tabs;
