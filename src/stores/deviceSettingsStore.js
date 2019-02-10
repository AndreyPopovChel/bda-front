import { observable, action } from 'mobx';
import agent from '../agent';

class DeviceSettingsStore {

  @observable loadingSettings;
  @observable updatingSettings;
  @observable updatingSettingsErrors;

  @observable allSettings = [];

  @action getSettings(sn) {
    this.loadingSettings = true;
    return agent.DeviceSettings.get(sn)
      .then(action(({ deviceSettings }) => { return deviceSettings; }))
      .finally(action(() => { this.loadingSettings = false; }))
  }

  @action getSerialNumbers(username) {
    this.loadingSettings = true;
    return agent.DeviceSettings.getSerialNumbers(username)
      .then(action(( serialNumbers ) => 
      {
        var settings = [];      
        serialNumbers.forEach(function (sn) {settings.push(sn)}); 
        settings.sort((a,b) => (parseInt(a.sn) > parseInt(b.sn)) ? 1 : ((parseInt(b.sn) > parseInt(a.sn)) ? -1 : 0)); 
        this.allSettings.replace(settings); 
      
      }))
      .finally(action(() => { this.loadingSettings = false; }))
  }

  @action updateSettings(deviceSettings) {
    this.updatingSettings = true;
    return agent.DeviceSettings.save(deviceSettings)      
      .finally(action(() => { this.updatingSettings = false; }))
  }

}

export default new DeviceSettingsStore();
