import React from 'react';
import LoginPage from './LoginPage';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
				<LoginPage />
      </div>);
  }
}