import ListErrors from './ListErrors';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LoadingSpinner from './LoadingSpinner';

@inject('userStore')
@inject('deviceSettingsStore')
@observer
class CustomizationsForm extends React.Component {
  constructor() {
    super();    

    this.state = {
      sn: '',
      cfgLock: '',
      updateTimeMin: '',
      smsEnable: '',
      phoneNumber: '',
      paramsmsEnable: '',
      deviceType: 1,
      numberInOrder: 0,
      hideDevice: false,
      ownerUserName: ''
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.onChangeSn = event => {
      this.setState(this.props.deviceSettingsStore.allSettings.find(x => x.sn === event.target.value));
    };

    this.submitForm = ev => {
      ev.preventDefault();

      this.props.onSubmitForm(this.state);
      
    };
  }

  componentWillMount() {
    var username = this.props.userStore.currentUser.username;
    if('admin' === username)
    {
      username = "";
    }

    this.props.deviceSettingsStore.getSerialNumbers(username);
  }

  render() {    

    if ( this.props.deviceSettingsStore.loadingSettings) {
      return (
        <LoadingSpinner />
      );
    }    

    const { allSettings } = this.props.deviceSettingsStore;

    return (
      <form onSubmit={this.submitForm}>
        <fieldset>       

          <fieldset className="form-group">
            <label>Заводской номер</label>
            <select 
              className="form-control" 
              value={this.state.sn} 
              onChange={this.onChangeSn}>
              <option value="">
                  Укажите серийный номер...
              </option>
                 {allSettings.map(cust => (
                  <option key={cust.sn} value={cust.sn}>
                      {cust.sn}
                  </option>
              ))}
            </select>            
          </fieldset>

          <fieldset className="form-group">
            <label>Сохранить изменения в регистраторе</label>
            <input
              className="form-control"
              type="text"
              placeholder="Сохранить изменения в регистраторе"
              value={this.state.cfgLock}
              onChange={this.updateState('cfgLock')}
            />
          </fieldset>

          <fieldset className="form-group">
            <label>Интервал обновления данных</label>
            <input
              className="form-control"
              type="text"
              placeholder="Интервал обновления данных"
              value={this.state.updateTimeMin}
              onChange={this.updateState('updateTimeMin')}
            />
          </fieldset>

          <fieldset className="form-group">
            <label>Разрешена отправка СМС</label>
            <input
              className="form-control"
              type="text"
              placeholder="Разрешена отправка СМС"
              value={this.state.smsEnable}
              onChange={this.updateState('smsEnable')}
            />
          </fieldset>

          <fieldset className="form-group">
            <label>Номер телефона для отправки СМС</label>
            <input
              className="form-control"
              type="text"
              placeholder="Номер телефона для отправки СМС"
              value={this.state.phoneNumber}
              onChange={this.updateState('phoneNumber')}
            />
          </fieldset>

          <fieldset className="form-group">
            <label>Формат СМС сообщения</label>
            <input
              className="form-control"
              type="text"
              placeholder="Формат СМС сообщения"
              value={this.state.paramsmsEnable}
              onChange={this.updateState('paramsmsEnable')}
            />
          </fieldset>

          <fieldset className="form-group">
            <label>Тип устройства</label>
            <select
              className="form-control"              
              placeholder="Тип устройства"
              value={this.state.deviceType}
              onChange={this.updateState('deviceType')}
            >
              <option value="1">Улей</option>
              <option value="2">Омшаник</option>
              <option value="3">Жилой вагон</option>
              <option value="4">Рабочий вагон</option>
              <option value="5">Пасека улица</option>
              <option value="6">Резерв 1</option>
              <option value="7">Резерв 2</option>
            </select>
          </fieldset>

          <fieldset className="form-group">
            <label>Порядковый номер</label>
            <input
              className="form-control"
              placeholder="Порядковый номер"
              value={this.state.numberInOrder}
              onChange={this.updateState('numberInOrder')}
            />
          </fieldset>

          <fieldset className="form-group">
            <label>Скрыть устройство</label>
            <input
              className="form-control"
              type="checkbox"
              placeholder="Скрыть устройство"
              value={this.state.hideDevice}
              onChange={this.updateState('hideDevice')}
            />
          </fieldset>

          
          {/* <fieldset className="form-group">
            <label>Пользователь</label>
            <input
              className="form-control"
              placeholder="Пользователь"
              value={this.state.ownerUserName}
              onChange={this.updateState('ownerUserName')}
            />
          </fieldset> */}

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.props.deviceSettingsStore.updatingSettings}
          >
            Обновить настройки выбранного устройства
          </button>

        </fieldset>
      </form>
    );
  }
}

@inject('userStore', 'authStore', 'deviceSettingsStore')
@withRouter
@observer
class Customizations extends React.Component {
  render() {
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">

              <h1 className="text-xs-center">Настройка устройств</h1>

              <ListErrors errors={this.props.deviceSettingsStore.updatingSettingsErrors} />

              <CustomizationsForm
                onSubmitForm={deviceSettings => this.props.deviceSettingsStore.updateSettings(deviceSettings)} />

              <hr />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Customizations;
