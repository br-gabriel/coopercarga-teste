import "./styles.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BagDrawer } from "../Drawers/BagDrawer";
import { ResponsiveMenuDrawer } from "../Drawers/ResponsiveMenuDrawer";
import { FilterDrawer } from "../Drawers/FilterDrawer";

export const Header = () => {
  const [showBag, setShowBag] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation();

  const handleOpenBag = () => {
    setShowBag(true);
  };

  const handleOpenMenu = () => {
    setShowMenu(true);
  };

  const handleOpenFilters = () => {
    setShowFilters(true);
  };

  const handleClose = () => {
    setShowBag(false);
    setShowMenu(false);
    setShowFilters(false);
  };

  const isCategoryRoute = location.pathname.match(/^\/[^/]+$/);

  return (
    <header className="bg-black text-white px-4 py-3 sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="/">
          <img src="Logo.png" alt="Logo MoveStore" className="logo" />
        </a>

        <nav className="nav d-none d-lg-flex">
          <ul className="nav">
            <li className="nav-item">
              <a href="/Camisetas" className="nav-link text-white">
                Camisetas
              </a>
            </li>
            <li className="nav-item">
              <a href="/Regatas" className="nav-link text-white">
                Regatas
              </a>
            </li>
            <li className="nav-item">
              <a href="/Calcoes" className="nav-link text-white">
                Calções
              </a>
            </li>
            <li className="nav-item">
              <a href="/Acessorios" className="nav-link text-white">
                Acessórios
              </a>
            </li>
          </ul>
        </nav>

        <div className="d-flex align-items-center">
          {isCategoryRoute && (
            <div>
              <button className="btn d-md-none" onClick={handleOpenFilters}>
                <i className="bi bi-funnel text-white fs-5"></i>
              </button>
              <FilterDrawer showFilters={showFilters} onClose={handleClose} />
            </div>
          )}

          <div>
            <button className="btn" onClick={handleOpenBag}>
              <i className="bi bi-bag text-white"></i>
            </button>
            <BagDrawer showBag={showBag} onClose={handleClose} />
          </div>

          <div>
            <button className="btn d-lg-none" onClick={handleOpenMenu}>
              <i className="bi bi-list fs-3 text-white"></i>
            </button>
            <ResponsiveMenuDrawer showMenu={showMenu} onClose={handleClose} />
          </div>
        </div>
      </div>
    </header>
  );
};
