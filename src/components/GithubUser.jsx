import React from 'react';
import {Link} from 'react-router';

class GithubUser extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        var user = this.props.user;
        return (
            <Link to={`/user/${user.login}`}>
             <img src={user.avatar_url}/>
             <p>{user.login}</p>
            </Link>
        );
    }
};

export default GithubUser;
