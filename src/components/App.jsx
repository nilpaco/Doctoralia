import React from 'react';
import {Link} from 'react-router-dom'

import Main from './Main'

export default class App extends React.Component {
	constructor(props) {
    super(props);
	}
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <Link to='/'>Home</Link>
        <Link style={localStorage.getItem('user') ? { display: 'none' } : {}} to='/login'>Logut</Link>
        <div>
          <Main />
        </div>
      </div>);
  }
}