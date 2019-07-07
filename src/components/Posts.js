import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts.actions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(propReceived) {
        if(propReceived.newPost) {
            this.props.posts.unshift(propReceived.newPost);
        }
    }

    render() {
        const posts = this.props.posts.map(post => (
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

const mapStateToProps = state => ({
    posts: state.posts.posts,  // posts from post.reducer file
    newPost: state.posts.post
});

export default connect(mapStateToProps, { fetchPosts })(Posts);