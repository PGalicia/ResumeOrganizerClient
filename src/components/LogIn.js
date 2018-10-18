import React, { Component } from "react";

class LogIn extends Component {
    state = {
        fetchInfo: ""
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
                console.log("this", this.state);
                this.setState({fetchInfo: json})
            });
    }
    
    render() {
        return (
            <React.Fragment>
                <p>Login Works!</p>
            </React.Fragment>
        );
    }
}

export default LogIn;