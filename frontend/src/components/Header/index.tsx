import Flamengo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="flastats-logo-container">
        <img src={Flamengo} alt="FlaStats" />
        <h1>FlaStats</h1>
        <p>
          Desenvolvido por{" "}
          <a href="https://github.com/Diego-Sant" target="_blank">
            Diego Santana
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
