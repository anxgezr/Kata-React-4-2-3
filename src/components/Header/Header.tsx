
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">

        <a href="#" className="header__logo">
          <span className="header__logo-icon">hh</span>
          <span className="header__logo-text">.FrontEnd</span>
        </a>

        <nav className="header__nav">
          <a href="#" className="header__link header__link--active">
            Вакансии FE
            <span className="header__dot" />
          </a>

          <a href="#" className="header__link header__link--disabled">
            <img
              src={`${import.meta.env.BASE_URL}images/user-circle.svg`}
              alt=""
              className="header__user-icon"
            />
            <span>Обо мне</span>
          </a>
        </nav>

      </div>
    </header>
  );
};
