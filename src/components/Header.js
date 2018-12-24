import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">          
          <Link to="/" className="navbar-brand">
            АРМ Пчеловода
          </Link>      

          <ul className="nav navbar-nav pull-xs-right">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Домашняя
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Войти
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Зарегистрироваться
              </Link>
            </li>

          </ul>          
        </div>
      </nav>
    );
  }
}

export default Header;
