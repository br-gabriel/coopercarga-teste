import "./styles.css";
import { Breadcrumb, Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { GetContext } from "../../context/getContext";
import PropTypes from "prop-types";

export const CategoryHeader = ({ categoryName }) => {
    const { formatCategoryName } = useContext(GetContext);
    const formattedCategoryName = formatCategoryName(categoryName);

    return (
        <section className="container my-4 d-flex justify-content-between align-items-end">
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className="breadcrumb-text">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{formattedCategoryName}</Breadcrumb.Item>
                </Breadcrumb>

                <h2 className="display-6">{formattedCategoryName}</h2>
            </div>

            <Dropdown className="mb-3">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Ordenar por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Menor preço</Dropdown.Item>
                    <Dropdown.Item href="#">Maior preço</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </section>
    );
};

CategoryHeader.propTypes = {
    categoryName: PropTypes.string.isRequired,
};
