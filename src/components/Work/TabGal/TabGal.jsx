import { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '../../../context/context';
import style from '../../css/style.module.scss';
import GalCom from './GalCom';
import Tabs from './Tabs';

const TabGal = () => {
  const contextStore = useContext(Context);
  return (
    <>
      <Row className={style.tabs}>
        <Col md={{ span: 5, offset: 7 }}>
          <Tabs />
        </Col>
        {/* All */}
        {contextStore.tabGal.all && (
          <>
            <GalCom
              mt="-150px"
              span={5}
              offset={1}
              img="work/br1.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              btn={true}
              span={5}
              offset={1}
              img="work/br2.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/br3.webp"
              mt="270px"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Understanding Jewellery"
              para="We uncovered the brand proposition, and created a sophisticated visual identity and digital platform for this unique jewellery concept."
            />
            <GalCom
              span={5}
              offset={1}
              img="work/br4.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="Trace Solutions"
              para="We created a new brand concept for a property management software company."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/br5.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Brinkworth"
              para="We created a brand new identity and online platform for these award winning documentary makers."
            />
            <GalCom
              span={5}
              offset={1}
              mt="150px"
              img="work/br6.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="Cynozure"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              mt="250px"
              img="work/br7.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Jazz Cafe"
              para="We re-branded one of London’s most iconic music venues."
            />
            <GalCom
              span={5}
              offset={1}
              img="work/br8.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="Uhuru"
              para="We designed and shaped a new ethically sourced fashion brand."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/dm1.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              img="work/dm2.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />
            <GalCom
              span={5}
              offset={1}
              mt="230px"
              img="work/dm3.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              img="work/br4.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />
            <GalCom
              span={5}
              offset={1}
              img="work/dm5.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />
            <GalCom
              span={5}
              offset={1}
              img="work/br1.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              img="work/web2.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/web3.webp"
              mt="230px"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              img="work/web4.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/web5.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              mt="230px"
              img="work/web6.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/web7.webp"
              mt="230px"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              img="work/web8.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/web9.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              mt="230px"
              img="work/web10.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />
          </>
        )}
        {/* Branding */}
        {contextStore.tabGal.brand && (
          <>
            <GalCom
              span={5}
              offset={1}
              img="work/br1.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              btn={true}
              span={5}
              offset={1}
              img="work/br2.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/br3.webp"
              mt="270px"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Understanding Jewellery"
              para="We uncovered the brand proposition, and created a sophisticated visual identity and digital platform for this unique jewellery concept."
            />
            <GalCom
              span={5}
              offset={1}
              img="work/br4.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="Trace Solutions"
              para="We created a new brand concept for a property management software company."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/br5.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Brinkworth"
              para="We created a brand new identity and online platform for these award winning documentary makers."
            />
            <GalCom
              span={5}
              offset={1}
              mt="150px"
              img="work/br6.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="Cynozure"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              mt="250px"
              img="work/br7.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Jazz Cafe"
              para="We re-branded one of London’s most iconic music venues."
            />
            <GalCom
              span={5}
              offset={1}
              img="work/br8.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="Uhuru"
              para="We designed and shaped a new ethically sourced fashion brand."
            />
          </>
        )}

        {/* digital marketing */}
        {contextStore.tabGal.dm && (
          <>
            <GalCom
              span={5}
              offset={1}
              img="work/dm1.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              btn={true}
              span={5}
              offset={1}
              img="work/dm2.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />
            <GalCom
              span={5}
              offset={1}
              mt="230px"
              img="work/dm3.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              img="work/br4.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />
            <GalCom
              span={5}
              offset={1}
              img="work/dm5.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />
          </>
        )}
        {/* Web */}
        {contextStore.tabGal.web && (
          <>
            <GalCom
              span={5}
              offset={1}
              img="work/br1.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              btn={true}
              span={5}
              offset={1}
              img="work/web2.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/web3.webp"
              mt="230px"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              img="work/web4.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/web5.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              mt="230px"
              img="work/web6.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/web7.webp"
              mt="230px"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              img="work/web8.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />

            <GalCom
              span={5}
              offset={1}
              img="work/web9.webp"
              one="BRANDING"
              two="WEB DESIGHN"
              three="WEB DEVELOPMENT"
              head="Martin Building"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building. "
            />
            <GalCom
              span={5}
              offset={1}
              mt="230px"
              img="work/web10.webp"
              one="BRANDING"
              two="MARKETING"
              three="WEB DESIGHN"
              pad="pr-5 pt-5 pb-5"
              head="ContractPodAi"
              para="We created a cutting edge platform for San Francisco-based firm Martin Building."
            />
          </>
        )}
      </Row>
    </>
  );
};

export default TabGal;
