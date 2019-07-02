import React, { Component } from 'react';
import axios from 'axios';


class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/posts')
        .then(res => res.data)
        .then(parsedResponse => this.setState({
            posts: parsedResponse
        }));
    }

    render() {
        const posts = this.state.posts.map(post => (
            <div key={ post.id } >
                <h2>
                    { post.title }
                </h2>
                <p>
                    { post.description }
                </p>
            </div>
        ));

        return(
            <div>
                <h1>Posts page</h1>
                { posts }
            </div>
        );
    }
}

export default Posts;