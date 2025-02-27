import { Offcanvas } from "react-bootstrap";
import PropTypes from 'prop-types';

export const ResponsiveMenuDrawer = ({ showMenu, onClose }) => {
  return (
    <Offcanvas show={showMenu} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <nav>
          <ul className="nav d-flex flex-column">
            <li className="nav-item">
              <a href="/Camisetas" className="nav-link text-black fw-semibold fs-4">
                Camisetas
              </a>
            </li>
            <li className="nav-item">
              <a href="/Regatas" className="nav-link text-black fw-semibold fs-4">
                Regatas
              </a>
            </li>
            <li className="nav-item">
              <a href="/Calcoes" className="nav-link text-black fw-semibold fs-4">
                Calções
              </a>
            </li>
            <li className="nav-item">
              <a href="/Acessorios" className="nav-link text-black fw-semibold fs-4">
                Acessórios
              </a>
            </li>
          </ul>
        </nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

ResponsiveMenuDrawer.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
