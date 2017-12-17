import React from 'react';

import { authService } from '../services/auth.service';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        authService.logout();

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(this.state));
        this.props.history.push('/');
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} name="username" onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} name="password" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}