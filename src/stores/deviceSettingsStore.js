import { observable, action } from 'mobx';
import agent from '../agent';

class DeviceSettingsStore {

  @observable loadingSettings;
  @observable updatingSettings;
  @observable updatingSettingsErrors;

  @action getSettings(sn) {
    this.loadingSettings = true;
    return agent.DeviceSettings.get(sn)
      .then(action(({ deviceSettings }) => { return deviceSettings; }))
      .finally(action(() => { this.loadingSettings = false; }))
  }

  @action getSerialNumbers(username) {
    this.loadingSettings = true;
    return agent.DeviceSettings.getSerialNumbers(username)
      .then(action(({ serialNumbers }) => { return serialNumbers; }))
      .finally(action(() => { this.loadingSettings = false; }))
  }

  @action updateSettings(deviceSettings) {
    this.updatingSettings = true;
    return agent.DeviceSettings.save(deviceSettings)      
      .finally(action(() => { this.updatingSettings = false; }))
  }

}

export default new DeviceSettingsStore();
