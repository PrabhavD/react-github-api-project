import React, {Component} from 'react';
import GithubUser from './GithubUser';

class Following extends React.Component {
    
    state = {
        following: []
    }

    fetchData(){
        fetch(`https://api.github.com/users/${this.props.params.username}/following`)
        .then(response => response.json())
        .then(
            following => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    following: following
                });
            }
        );
    }
    
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.username !== this.props.params.username) {
            this.fetchData();
        }
    }

    render() {
        if (!this.state.following) {
            return <div>LOADING FOLLOWING...</div>
        }
            
        return (
        <div className="following-page">
            <h2>Following of {this.props.params.username}</h2>
            <ul>
                {this.state.following.map(
                    (chosenFollowing, chosenKey) => <GithubUser user={chosenFollowing} key={chosenKey} />
                )}
            </ul>
        </div>
        );
    }
};

export default Following;
