import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { MiniBanner } from "./components/MiniBanner";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { GetContextProvider } from "./context/getContext";

function App() {
  return (
    <GetContextProvider>
      <Router>
        <Header />
        <MiniBanner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </GetContextProvider>
  );
};

export default App;