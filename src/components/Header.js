import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';


const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">        

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
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <div>
          <ul className="nav navbar-nav pull-xs-right">        

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Главная
            </Link>
          </li>     

          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <i className="ion-gear-a" />&nbsp;Персональные настройки
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/customizations" className="nav-link">
              <i className="ion-gear-a" />&nbsp;Настройка устройств
            </Link>
          </li>

          <li className="nav-item nav-link">
            Добро пожаловать, {props.currentUser.username}          
          </li>

        </ul>
      </div>
    );
  }

  return null;
};

@inject('userStore', 'commonStore')
@observer
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">   

          <Link to="/" className="navbar-brand">
                АРМ Пчеловода
          </Link>      

          <LoggedOutView currentUser={this.props.userStore.currentUser} />

          <LoggedInView currentUser={this.props.userStore.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
