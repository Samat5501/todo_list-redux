import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { rootReducer } from './store/reducers/index';
// import { composeWithDevTools } from "redux-devtools-extension";
import "antd/dist/antd.css";
import { store } from './store';


// const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);