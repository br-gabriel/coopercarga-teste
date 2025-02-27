import "./styles.css";

export const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-4 footer-container">
      <section className="d-flex justify-content-between">
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <a href="#" className="text-white text-decoration-none">
              Camiseta
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">
              Regata
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">
              Calção
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">
              Acessório
            </a>
          </li>
        </ul>
        <section className="d-flex flex-column gap-3 fs-6">
          <div>
            Redes sociais
            <div className="d-flex gap-3 pl-2">
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          <div className="d-flex flex-column gap-2 mb-4 fs-6">
            Métodos de pagamento
            <div className="d-flex gap-2 wrap">
              <div className="payment-card">
                <img
                  src="https://static.nike.com.br/v11-47-0/images/paymentMethods/mastercard.svg"
                  alt="mastercard"
                  loading="lazy"
                />
              </div>
              <div className="payment-card">
                <img
                  src="https://static.nike.com.br/v11-47-0/images/paymentMethods/visa.svg"
                  alt="visa"
                  loading="lazy"
                />
              </div>
              <div className="payment-card">
                <img
                  src="https://static.nike.com.br/v11-47-0/images/paymentMethods/elo.svg"
                  alt="elo"
                  loading="lazy"
                />
              </div>
              <div className="payment-card">
                <img
                  src="https://static.nike.com.br/v11-47-0/images/paymentMethods/pix.svg"
                  alt="pix"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="border-top border-white d-flex justify-content-between align-items-center pt-2 footer-bottom">
        <div className="d-flex gap-3">
          <a href="#" className="text-white text-decoration-none fs-6 fw-light">
            Política de Privacidade
          </a>
          <a href="#" className="text-white text-decoration-none fs-6 fw-light">
            Termos de Cookies
          </a>
        </div>
        <p className="fw-light pt-2">
          © 2025 MoveSports. Todos os direitos reservados. CNPJ:
          01.000.101/0045-55
        </p>
      </div>
    </footer>
  );
};
