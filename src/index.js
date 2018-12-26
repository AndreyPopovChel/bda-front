import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';


import App from './components/App';

import locationStore from './stores/locationStore';


const stores = {
  locationStore
};

promiseFinally.shim();
useStrict(true);

ReactDOM.render((   
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider> 
), document.getElementById('root'));
