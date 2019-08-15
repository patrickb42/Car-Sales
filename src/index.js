import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import 'bulma/css/bulma.css';
import './styles.scss';

import App from './App';

const store = createStore(() => {});

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
