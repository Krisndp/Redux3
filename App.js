import React from 'react';
import {Provider} from 'react-redux';
import Main from './src/Main';
import store from './redux/store/store';
export default class App extends React.Component{

  render(){
    return(
      <Provider store = {store}>
        <Main/>
      </Provider>
    )
  }
}