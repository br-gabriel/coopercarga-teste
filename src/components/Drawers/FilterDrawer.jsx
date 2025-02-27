import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

export const FilterDrawer = ({ showFilters, onClose }) => {
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleSave = () => {
    console.log("Selected Price Range:", selectedPrice);
  };

  return (
    <Offcanvas show={showFilters} onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filtros</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h4 className="fs-4">Tamanhos</h4>
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-outline-secondary">P</button>
          <button className="btn btn-outline-secondary">M</button>
          <button className="btn btn-outline-secondary">G</button>
          <button className="btn btn-outline-secondary">GG</button>
        </div>

        <h4 className="fs-4 mt-4">Marcas</h4>
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-outline-secondary">Adidas</button>
          <button className="btn btn-outline-secondary">Nike</button>
          <button className="btn btn-outline-secondary">Puma</button>
          <button className="btn btn-outline-secondary">Jordan</button>
        </div>

        <h4 className="fs-4 mt-4">Preço</h4>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="price"
            value="Até R$ 100"
            id="flexRadioDefault1"
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Até R$ 100
          </label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="price"
            value="R$ 100 - R$ 200"
            id="flexRadioDefault2"
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            R$ 100 - R$ 200
          </label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="price"
            value="R$ 200 - R$ 300"
            id="flexRadioDefault3"
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            R$ 200 - R$ 300
          </label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="price"
            value="R$ 300 - R$ 400"
            id="flexRadioDefault4"
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault4">
            R$ 300 - R$ 400
          </label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="price"
            value="R$ 400 - R$ 500"
            id="flexRadioDefault5"
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault5">
            R$ 400 - R$ 500
          </label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="price"
            value="Acima R$ 500"
            id="flexRadioDefault6"
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault6">
            Acima R$ 500
          </label>
        </div>
        <Button
          className="mt-3 bg-black text-white border-black"
          onClick={handleSave}
        >
          Salvar
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

FilterDrawer.propTypes = {
  showFilters: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
