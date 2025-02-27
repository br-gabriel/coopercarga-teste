import { useState } from "react";
import { Card } from "react-bootstrap";
import { ProductModal } from "./ProductModal";
import PropTypes from 'prop-types';

export const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="mb-4" onClick={handleCardClick} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={product.image_url} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{product.sport}</Card.Subtitle>
          <Card.Text className="d-flex justify-content-between">
            R$ {product.price} 
            <span className="text-danger">{product.available_sizes.length === 0 ? "Indisponível" : ""}</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <ProductModal show={showModal} productName={product.name} onClose={handleCloseModal} />
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sport: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    available_sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
