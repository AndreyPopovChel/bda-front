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

    if ( this.props.locationStore.isLoadingLastLocations && lastLocations.length === 0) {
      return (
        <LoadingSpinner />
      );
    }

    var layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 12},
      {i: 'b', x: 2, y: 0, w: 2, h: 12},
      {i: 'c', x: 4, y: 0, w: 2, h: 12}
    ];

    var xVal = 0;

    //alert(lastLocations.length);

    lastLocations.map(location => 
      {
        layout.push(
          {i: location.sn, x: xVal, y: 0, w: 2, h: 12}
        );
        xVal += 2;
    });

    var tempFamily = {

    }

    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a">
            <BeeFamilyView family = {tempFamily}/>
        </div>
        <div key="b">
            <BeeFamilyView family = {tempFamily}/>
        </div>
        <div key="c">
            <BeeFamilyView family = {tempFamily}/>
        </div>
      </GridLayout>
    )
  }
}

export default BeeFamilyGridLayout;