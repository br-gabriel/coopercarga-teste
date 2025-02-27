import { useState, useEffect, useContext } from "react";
import { Modal, Button, Image, Row, Col, Form } from "react-bootstrap";
import { GetContext } from "../context/getContext";
import PropTypes from "prop-types";

export const ProductModal = ({ show, productName, onClose }) => {
  const { products, setSelectedProduct, selectedProduct } = useContext(GetContext);
  const [showShipping, setShowShipping] = useState(false);

  useEffect(() => {
    if (show) {
      const foundProduct = products.find(
        (product) => product.name === productName
      );
      setSelectedProduct(foundProduct);
    }
  }, [show, productName, products, setSelectedProduct]);

  const toggleShipping = () => setShowShipping(true);

  const imageStyle = selectedProduct && (selectedProduct.type === "Regata" || selectedProduct.type === "Camiseta")
      ? { width: "100%", height: "100%", objectFit: "cover" }
      : {};

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Body>
        {selectedProduct ? (
          <Row>
            <Col
              md={7}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src={selectedProduct.image_url}
                fluid
                style={imageStyle}
              />
            </Col>
            <Col md={5}>
              <h3
                className="display-6"
                style={{ fontSize: "2rem", lineHeight: "2rem" }}
              >
                {selectedProduct.name}
              </h3>
              <p style={{ textTransform: "uppercase", color: "gray" }}>
                {selectedProduct.seller}
              </p>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                R$ {selectedProduct.price}
              </p>

              {selectedProduct.available_sizes.length > 0 ? (
                <>
                  <p>Tamanhos:</p>
                  <div className="d-flex gap-2 flex-wrap">
                    {selectedProduct.available_sizes.map((size, index) => (
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
