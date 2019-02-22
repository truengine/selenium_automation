import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Home } from './components/Home'
import myTheme from './Styles/General.css'
import * as docx from "docx";

//const doc = new Document();
//const styles = fs.readFileSync("./styles.xml", "utf-8");
// Styles
import 'semantic-ui-css/semantic.min.css';

console.log("app")
// Redux store
import store from './reducers/store';

// Sample -- REMOVE DURING IMPLEMENTATION
import Sample from './containers/sampleContainer';

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('content'),
);

// Enable hot reloading
module.hot.accept();
