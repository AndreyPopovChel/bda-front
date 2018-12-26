import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class BeeFamilyView extends React.Component {

  render() {
    const { family } = this.props;

    return (
      <div>
        <h3 >{family.label} #{family.sn}</h3>
        <div>Обновлено: {family.timestamp}</div>
        <div>GPS: {family.gsmlat}N {family.gsmlon}E</div>

        <h5 className="text-center">Температура</h5> 
        <h5 className="text-danger"> T2 = {family['temperature 2']} &deg;C</h5>
        <h5 className="text-center"> Влажность</h5>
        <h5 className="text-success"> H1 = {family.humidity} %</h5>
        <h5 className="text-center"> Качество воздуха</h5>
        <h5 className="text-success"> CO2 = {family.CO2eq} ppm</h5>
        <h5 className="text-danger"> ЛОВ = {family.TVOC} ppb</h5>
        <h5 className="text-success">Атмосферное давление</h5>
        <h5 className="text-danger"> Давл. = {family.pressurebarom} Pa</h5>
      </div>
    )
  }
}
