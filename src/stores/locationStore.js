import { observable, action } from 'mobx';
import agent from '../agent';
import moment from 'moment';

class LocationStore {

  @observable additionalDevices = [];
  @observable mainLocations = [];
  @observable otherLocations = [];
  @observable isLoadingLastLocations = false;
  
  @action loadLastLocations(username) {
    this.isLoadingLastLocations = true;
    return agent.Locations.getLast(username)
      .then(  action((lastLocations) => 
      {
        var _additionalDevices = [];
        var _mainLocations = [];
        var _otherLocations = [];
      
        lastLocations.forEach(function (loc) {
          if (moment(loc.timestamp, 'DD.MM.YYYY H:mm:ss').add(2, 'days').isBefore())
          {
            loc.opacity = 0.5;
          }
          else
          {
            loc.opacity = 1;
          }
      
          if( loc.hideDevice === true)
          {
            loc.opacity = 0;
          }
      
          if(loc.deviceType !== 1)
          {
            _additionalDevices.push(loc);
          }
          else {
            if (parseInt(loc.sn) <= 100000) {
              _mainLocations.push(loc);
            }
            else {
              loc.color = 'blue';
              _otherLocations.push(loc);
            }
          }
        });    
        
        var colorIndex = 0;
        for(var i = 0; i < _mainLocations.length; i++)
        {
           if(colorIndex % 3 === 0)
           {
             _mainLocations[i].color = 'white';
           }
           else if(colorIndex % 3 === 1)
           {
             _mainLocations[i].color = 'blue';
           }
           else if(colorIndex % 3 === 2)
           {
             _mainLocations[i].color = 'yellow';
           }
      
           colorIndex++;
      
           if(i == 5 || (i % 6 === 5))
           {
             colorIndex++;
           }
        }
      
        var colorIndex = 0;
        for(var i = 0; i < _otherLocations.length; i++)
        {
          if(colorIndex % 3 === 0)
          {
            _otherLocations[i].color = 'white';
          }
          else if(colorIndex % 3 === 1)
          {
            _otherLocations[i].color = 'blue';
          }
          else if(colorIndex % 3 === 2)
          {
            _otherLocations[i].color = 'yellow';
          }
      
          colorIndex++;
      
          if(i == 5 || (i % 6 === 5))
          {
            colorIndex++;
          }
        }
        
        this.additionalDevices.replace(_additionalDevices);
        this.mainLocations.replace(_mainLocations);    
        this.otherLocations.replace(_otherLocations); 
      
      }))
      .finally(action(() => { this.isLoadingLastLocations = false; }))
  }
}

export default new LocationStore();
