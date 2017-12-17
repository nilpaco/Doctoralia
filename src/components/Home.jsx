import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                You're home!
                <Link to="/login">Logout</Link>
            </div>
        );
    }
}