import "./styles.css";
import { Offcanvas } from "react-bootstrap";
import { ProductCard } from "../../ProductCard";
import { useState } from "react";
import PropTypes from "prop-types";

export const BagDrawer = ({ showBag, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Offcanvas show={showBag} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          <div className="half-width-card">
            <ProductCard
              product={{
                image_url:
                  "https://imgnike-a.akamaihd.net/1300x1300/0228340L.jpg",
                name: "Camiseta do Brasil",
                sport: "Futebol",
                price: "349.99",
                available_sizes: ["P", "M", "G", "GG"],
              }}
            />
          </div>
          <div className="quantity-controls">
            <p>Quantidade:</p>
            <button
              onClick={handleDecrement}
              className="btn btn-outline-secondary"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrement}
              className="btn btn-outline-secondary"
            >
              +
            </button>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

BagDrawer.propTypes = {
  showBag: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
