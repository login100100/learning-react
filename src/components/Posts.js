import React, { Component } from 'react';
import axios from 'axios';


class Posts extends Component {
    componentDidMount() {
        axios.get('http://localhost:4000/posts')
        .then(res => res.data)
        .then(parsedResponse => console.log(parsedResponse));
    }

    render() {
        return (
            <div>
                <h1>Posts page</h1>
            </div>
        )
    }
}

export default Posts;