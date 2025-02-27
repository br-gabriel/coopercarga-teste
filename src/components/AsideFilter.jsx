import { Accordion, Button } from "react-bootstrap";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const AsideFilter = () => {
  const location = useLocation();

  const [selectedPrice, setSelectedPrice] = useState("");

  const renderSizeButtons = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes("regatas") || path.includes("camisetas") || path.includes("calcoes")) {
      const sizes = ["XPP", "P", "M", "G", "GG"];
      return sizes.map((size, index) => (
        <Button variant="outline-secondary" key={index}>
          {size}
        </Button>
      ));
    } else if (path.includes("acessorios")) {
      const sizes = ["39", "40", "41", "42", "43", "44"];
      return sizes.map((size, index) => (
        <Button variant="outline-secondary" key={index}>
          {size}
        </Button>
      ));
    }
  };

  const handleSave = () => {
    console.log("Selected Price Range:", selectedPrice);
  };

  return (
    <Accordion
      defaultActiveKey="0"
      alwaysOpen
      className="mb-4 d-none d-md-block"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tamanhos</Accordion.Header>
        <Accordion.Body>
          <div className="d-flex gap-2 flex-wrap">
            {renderSizeButtons()}
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Marcas</Accordion.Header>
        <Accordion.Body>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-outline-secondary">Adidas</button>
            <button className="btn btn-outline-secondary">Nike</button>
            <button className="btn btn-outline-secondary">Puma</button>
            <button className="btn btn-outline-secondary">Jordan</button>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Preço</Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
