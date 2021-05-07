import React from 'react';


class GithubRepo extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <a href={this.props.repo.url}>
                <p>{this.props.repo.full_name}</p>
            </a>
        );
    }
};

export default GithubRepo;
