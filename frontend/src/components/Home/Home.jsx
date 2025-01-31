import { Row, Col } from "react-bootstrap";
import Product from "../Product/Product";
import products from "../../utils/products";

const Home = () => {
  return (
    <>
      <h1>Poslední produkt</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
