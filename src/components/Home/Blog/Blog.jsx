import { Row, Container } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import BlogCom from './BlogCom';
import { blog } from '../../Data/Data';

const Blog = () => {
  return (
    <>
      <Container fluid>
        <Row>
          {blog.map((item) => (
            <BlogCom
              span={item.span}
              offset={item.offset}
              img={item.img}
              one={item.one}
              two={item.two}
              head={item.head}
              para={item.para}
              pad={item.pad}
              mt={item.mt}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Blog;
