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

    const { lastLocations } = this.props.locationStore;

    if ( this.props.locationStore.isLoadingLastLocations) {
      return (
        <LoadingSpinner />
      );
    }

    var layout = [];

    var xVal = 0;
    var yVal = 0;
    var locCounter = 0;

    lastLocations.map(location => 
      {
        layout.push(
          {i: location.sn, x: xVal, y: yVal, w: 2, h: 12, loc: location}
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
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        {
          layout.map(lt => {
            return (
              <div key={lt.i}>
                  <BeeFamilyView family = {lt.loc}/>
              </div>
            );
          })
        }       
      </GridLayout>
    )
  }
}

export default BeeFamilyGridLayout;