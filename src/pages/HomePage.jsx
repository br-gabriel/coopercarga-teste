import { BannersCarousel } from "../components/BannersCarousel";
import { HighlightProducts } from "../components/HighlightProducts";

export const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <BannersCarousel />
      <HighlightProducts />
    </div>
  );
};
