import React from 'react';
import BeeFamilyGridLayout from './BeeFamilyGridLayout';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@withRouter
@observer
export default class Home extends React.Component {

  render() {    
      return (
        <div className="home-page back-view">
          <BeeFamilyGridLayout />
        </div>
      );
    }  
}
