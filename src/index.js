import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import 'font-awesome/css/font-awesome.min.css'
import "./i18n";


ReactDOM.render(
      <BrowserRouter>
              <Provider store={store}>
                  <React.StrictMode>
                          <Suspense fallback={<div>Loading...</div>}>
                              <App />
                          </Suspense>
                  </React.StrictMode>,
              </Provider>
      </BrowserRouter>,
  document.getElementById('root')
);



