import { observable, action } from 'mobx';
import agent from '../agent';

class LocationStore {

  @observable lastLocations = [];
  @observable isLoadingLastLocations = false;
  
  @action loadLastLocations() {
    this.isLoadingLastLocations = true;
    return agent.Locations.getLast()
      .then(  action((lastLocations) => {this.lastLocations.replace(lastLocations); }))
      .finally(action(() => { this.isLoadingLastLocations = false; }))
  }
}

export default new LocationStore();
