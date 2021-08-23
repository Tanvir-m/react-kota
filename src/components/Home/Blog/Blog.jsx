import { Row, Container } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import BlogCom from './BlogCom';

const Blog = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <BlogCom
            span={5}
            offset={1}
            img="blogOne.webp"
            one="BRANDING"
            two="WEB DESIGHN"
            head="SuperYachtsMonaco"
            para="We crafted a beautiful website for the boutique yacht brokerage, SuperYachtsMonaco."
          />
          <BlogCom
            span={5}
            offset={1}
            img="blogTwo.webp"
            mt="150px"
            one="BRANDING"
            two="WEB DESIGHN"
            three="WEB DEVELOPMENT"
            pad="pr-5 pt-5 pb-5"
            head="Martin Building"
            para="We created a cutting edge platform for San Francisco-based firm Martin Building."
          />

          <BlogCom
            span={5}
            offset={1}
            img="blogThree.webp"
            mt="250px"
            one="E-COMMERCE"
            two="WEB DESIGHN"
            three="WEB DEVELOPMENT"
            head="Aardvark"
            para="We designed a new E-Commerce platform for Aardvark, an insect-based pet food startup."
          />
          <BlogCom
            span={5}
            offset={1}
            img="blogFour.webp"
            one="WEB DESIGHN"
            two="WEB DEVELOPMENT"
            pad="pr-5 pt-5 pb-5"
            head="Bounce"
            para="We designed a highly animated and playful website for Bounce, the home of ping pong."
          />

          <BlogCom
            span={5}
            offset={1}
            img="blogFive.webp"
            one="ART DIRECTION"
            two="MARKETING"
            three="VIDEO"
            head="Jamie Oliver - 7 Ways"
            para="We created a campaign packed full of impact for Jamie's new book, 7 Ways."
          />
          <BlogCom
            span={5}
            offset={1}
            img="blogSix.webp"
            mt="150px"
            one="WEB DESIGHN"
            two="WEB DEVELOPMENT"
            pad="pr-5 pt-5 pb-5"
            head="Martin Building"
            para="We created a cutting edge platform for San Francisco-based firm Martin Building."
          />

          <BlogCom
            span={5}
            offset={1}
            img="blogSeven.webp"
            mt="250px"
            one="E-COMMERCE"
            two="WEB DESIGHN"
            three="WEB DEVELOPMENT"
            head="Matchroom"
            para="We put the punch into one of the biggest sports promoters in the world."
          />
          <BlogCom
            span={5}
            offset={1}
            img="blogEight.webp"
            one="WEB DESIGHN"
            two="WEB DEVELOPMENT"
            pad="pr-5 pt-5 pb-5"
            head="Design4Retail"
            para="We got super creative to showcase the work and culture of this awesome retail design agency."
          />
        </Row>
      </Container>
    </>
  );
};

export default Blog;
