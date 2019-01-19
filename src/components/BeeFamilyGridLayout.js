import React from 'react';
import BeeFamilyView from './BeeFamilyView';
import GridLayout from 'react-grid-layout';
import '../styles/gridStyles.css';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import LoadingSpinner from './LoadingSpinner';

@inject('locationStore')
@withRouter
@observer
class BeeFamilyGridLayout extends React.Component {
  componentDidMount() {
    this.props.locationStore.loadLastLocations();
  }

  render() {

    const { additionalDevices, mainLocations, otherLocations } = this.props.locationStore;

    if ( this.props.locationStore.isLoadingLastLocations) {
      return (
        <LoadingSpinner />
      );
    }

    var layout1 = [];
    var xVal = 0;
    var yVal = 0;
    var locCounter = 0;
    additionalDevices.map(location => 
      {
        layout1.push(
          {i: location.sn, x: xVal, y: yVal, w: 2, h: 12, isResizable: false, isDraggable: false, loc: location}
        );
        xVal += 2;

        locCounter++;
        if(locCounter % 6 == 0)
        {
          xVal = 0;
          yVal ++;
        }
    });

    var layout2 = [];
    xVal = 0;
    yVal = 0;
    locCounter = 0;
    mainLocations.map(location => 
      {
        layout2.push(
          {i: location.sn, x: xVal, y: yVal, w: 2, h: 12, isResizable: false, isDraggable: false, loc: location}
        );
        xVal += 2;

        locCounter++;
        if(locCounter % 6 == 0)
        {
          xVal = 0;
          yVal ++;
        }
    });

    var layout3 = [];
    xVal = 0;
    yVal = 0;
    locCounter = 0;
    otherLocations.map(location => 
      {
        layout3.push(
          {i: location.sn, x: xVal, y: yVal, w: 2, h: 12, isResizable: false, isDraggable: false, loc: location}
        );
        xVal += 2;

        locCounter++;
        if(locCounter % 6 == 0)
        {
          xVal = 0;
          yVal ++;
        }
    });

    return (
      <div>
        <div className="layout-label">
          Хозяйственные постройки
        </div>
        <GridLayout className="layout" layout={layout1} cols={12} rowHeight={30} width={1200} verticalCompact="false" preventCollision="true">
          {
            layout1.map(lt => {
              return (
                <div key={lt.i}>
                    <BeeFamilyView family = {lt.loc}/>
                </div>
              );
            })
          }       
        </GridLayout>
        <div className="layout-label">
          Основная пасека
        </div>
        <GridLayout className="layout" layout={layout2} cols={12} rowHeight={30} width={1200} verticalCompact="false" preventCollision="true">
          {
            layout2.map(lt => {
              return (
                <div key={lt.i}>
                    <BeeFamilyView family = {lt.loc}/>
                </div>
              );
            })
          }       
        </GridLayout>
        <div className="layout-label">
          Отводки и рои
        </div>
        <GridLayout className="layout" layout={layout3} cols={12} rowHeight={30} width={1200} verticalCompact="false" preventCollision="true">
          {
            layout3.map(lt => {
              return (
                <div key={lt.i}>
                    <BeeFamilyView family = {lt.loc}/>
                </div>
              );
            })
          }       
        </GridLayout>
      </div>
    )
  }
}

export default BeeFamilyGridLayout;