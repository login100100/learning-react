import React, { Component } from 'react'
import Posts from './Posts'
import PostForm from './PostForm'

class PostsPage extends Component {
    render() {
        return (
            <div className="postsPage">
                <PostForm />
                <Posts />
            </div>            
        );
    }
}

export default PostsPage;
