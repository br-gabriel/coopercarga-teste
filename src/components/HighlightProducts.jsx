import { useContext } from "react";
import { GetContext } from "../context/getContext";
import { ProductCard } from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

export const HighlightProducts = () => {
  const { products } = useContext(GetContext);

  return (
    <Container>
      <h2 className="my-4 display-6">Destaques</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.name} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
