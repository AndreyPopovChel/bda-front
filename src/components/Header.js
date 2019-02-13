import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import logo from '../styles/background.jpg';
import '../styles/beeFamily.css';


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
            Добро пожаловать, {props.currentUser.username}!          
          </li>

          <li className="nav-item">
            <button
                className="btn btn-outline"
                onClick={() =>
                  props.authStore.logout()}>
                Выйти
            </button>          
          </li>

        </ul>

        
      </div>
    );
  }

  return null;
};

@inject('userStore', 'commonStore', 'authStore')
@observer
class Header extends React.Component {  

  render() {
    return (
      <div>
        <img className="logo-image" src={logo} alt="Logo" />
        <nav className="navbar navbar-light main-header-panel">
       
          <div className="container">            

            <Link to="/" className="navbar">
                  АРМ Пчеловода
            </Link>     
            <div className="navbar-brand">Система ТЕССО</div> 

            <LoggedOutView currentUser={this.props.userStore.currentUser} />

            <LoggedInView history={this.props.history} authStore={this.props.authStore} currentUser={this.props.userStore.currentUser} />
          </div>
         </nav>

      </div>
      
    );
  }
}

export default Header;
