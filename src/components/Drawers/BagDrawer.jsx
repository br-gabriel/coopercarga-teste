import { Offcanvas } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const BagDrawer = ({ showBag, onClose }) => {
  return (
    <Offcanvas show={showBag} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

BagDrawer.propTypes = {
  showBag: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
