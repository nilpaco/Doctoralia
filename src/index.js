import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import App from './components/App.jsx';
import styles from './styles.css';

ReactDOM.render((
    <HashRouter>
      <App className='${styles}' />
    </HashRouter>
    ), document.getElementById('root'));
