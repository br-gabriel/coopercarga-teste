import { useState, useEffect, useContext } from "react";
import { Modal, Button, Image, Row, Col, Form } from "react-bootstrap";
import { GetContext } from "../context/getContext";
import PropTypes from "prop-types";

export const ProductModal = ({ show, productName, onClose }) => {
  const { products } = useContext(GetContext);
  const [product, setProduct] = useState(null);
  const [showShipping, setShowShipping] = useState(false);

  useEffect(() => {
    if (show) {
      const foundProduct = products.find(
        (product) => product.name === productName
      );
      setProduct(foundProduct);
    }
  }, [show, productName, products]);

  const toggleShipping = () => setShowShipping(true);

  const imageStyle = product && (product.type === "Regata" || product.type === "Camiseta")
      ? { width: "100%", height: "100%", objectFit: "cover" }
      : {};

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Body>
        {product ? (
          <Row>
            <Col
              md={7}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src={product.image_url}
                fluid
                style={imageStyle}
              />
            </Col>
            <Col md={5}>
              <h3
                className="display-6"
                style={{ fontSize: "2rem", lineHeight: "2rem" }}
              >
                {product.name}
              </h3>
              <p style={{ textTransform: "uppercase", color: "gray" }}>
                {product.seller}
              </p>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                R$ {product.price}
              </p>

              {product.available_sizes.length > 0 ? (
                <>
                  <p>Tamanhos:</p>
                  <div className="d-flex gap-2 flex-wrap">
                    {product.available_sizes.map((size, index) => (
                      <Button variant="outline-primary" key={index}>
                        {size}
                      </Button>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-danger">Indisponível</p>
              )}

              <Form.Group controlId="formZipCode" className="mt-3">
                <Form.Label>Consultar Frete:</Form.Label>
                <div className="d-flex">
                  <Form.Control type="text" placeholder="Digite seu CEP" />
                  <Button
                    variant="outline-primary"
                    onClick={toggleShipping}
                    className="ms-2"
                  >
                    OK
                  </Button>
                </div>
              </Form.Group>

              {showShipping && (
                <p className="mt-2">Frete para todo o Brasil: R$ 12,00</p>
              )}

              <Button
                variant="primary"
                className="mt-3"
                style={{ width: "100%" }}
              >
                Comprar
              </Button>
            </Col>
          </Row>
        ) : (
          <p>Produto não encontrado.</p>
        )}
      </Modal.Body>
    </Modal>
  );
};

ProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  productName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
