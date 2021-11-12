import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import GalCom from './GalCom';
import { work } from '../../Data/Data';

const TabGal = () => {
  // const contextStore = useContext(Context);
  const [data, setData] = useState(work);
  const [act, setAct] = useState({
    all: true,
    brand: false,
    dm: false,
    web: false,
  });

  const allClickHandler = () => {
    setData(work);
    setAct({ all: true, brand: false, dm: false, web: false });
  };

  const filterItem = (catItem) => {
    const updatedItems = work.filter((curElem) => curElem.cat === catItem);
    switch (catItem) {
      case 'brand':
        setAct({ all: false, brand: true, dm: false, web: false });
        break;
      case 'dm':
        setAct({ all: false, brand: false, dm: true, web: false });
        break;
      case 'web':
        setAct({ all: false, brand: false, dm: false, web: true });
        break;
      default:
        setAct({ all: true, brand: false, dm: false, web: false });
      // code block
    }
    setData(updatedItems);
  };

  return (
    <>
      <Row className={style.tabs}>
        <Col md={{ span: 5, offset: 7 }}>
          <ul className={style.tabUl}>
            <li
              onClick={allClickHandler}
              className={act.all && `${style.active}`}
            >
              All
            </li>
            <li
              onClick={() => filterItem('brand')}
              className={act.brand && `${style.active}`}
            >
              Branding
            </li>
            <li
              onClick={() => filterItem('dm')}
              className={act.dm && `${style.active}`}
            >
              Digital Marketing
            </li>
            <li
              onClick={() => filterItem('web')}
              className={act.web && `${style.active}`}
            >
              Websites
            </li>
          </ul>
        </Col>
        {/* All */}

        {data.map((item) => (
          <GalCom
            mt={item.mt}
            span={item.span}
            offset={item.offset}
            img={item.img}
            one={item.one}
            two={item.two}
            three={item.three}
            head={item.head}
            para={item.para}
            cat={item.cat}
          />
        ))}
      </Row>
    </>
  );
};

export default TabGal;
