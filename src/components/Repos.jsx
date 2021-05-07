import React, {Component} from 'react';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {
    
    state = {
        repo: []
    }

    fetchData(){
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then(
            repo => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    repo: repo
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
        if (!this.state.repo) {
            return <div>LOADING REPOSITORIES...</div>
        }
            
        return (
        <div className="repo-page">
            <h2>Repositories of {this.props.params.username}</h2>
            <ul>
                {this.state.repo.map(
                    (chosenRepo, chosenKey) => <GithubRepo user={chosenRepo} key={chosenKey} />
                )}
            </ul>
        </div>
        );
    }
};

export default Repos;
