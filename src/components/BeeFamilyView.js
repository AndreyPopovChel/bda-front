import React from 'react';
import { observer } from 'mobx-react';
import '../styles/beeFamily.css';

@observer
export default class BeeFamilyView extends React.Component {

  render() {
    const { family } = this.props;

    const batteryStyle = {
      height: family.batt + '%'
    };

    var temperature = family['temperature 1'];
    if(parseFloat(family['temperature 1']) > 10)
    {
      temperature = family['temperature 2']
    }
    
    return (
      <div style={{opacity: family.opacity}}>
        <div className="battery"><div className="battery-level" style={batteryStyle}></div></div>
        <div className="color-mark" style={{background: family.color}}></div>
        <div className="family-header">{family.label} #{family.sn}</div>
        <div className="common-label">Обновлено: {family.timestamp}</div>
        <div className="common-label">GPS: {family.gsmlat}N {family.gsmlon}E</div>

        <div className="header-label">Температура</div> 
        <div className="common-label"> T2 = {temperature} &deg;C</div>
        <div className="header-label"> Влажность</div>
        <div className="common-label"> H1 = {family.humidity} %</div>
        <div className="header-label"> Качество воздуха</div>
        <div className="common-label"> CO2 = {family.CO2eq} ppm</div>
        <div className="common-label"> ЛОВ = {family.TVOC} ppb</div>
        <div className="header-label">Атмосферное давление</div>
        <div className="common-label"> Давл. = {family.pressurebarom} Pa</div>
        <div className="common-label"> Крышка = ЗАКР</div>
        <button className="button-view">Послушать звук</button>
        <button className="button-view">Анализ звука пчел</button>        
      </div>
    )
  }
}
