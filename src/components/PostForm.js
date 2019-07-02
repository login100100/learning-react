import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const post = {
            title: this.state.title,
            description: this.state.description
        }

        axios.post('http://localhost:4000/posts', JSON.stringify(post), {
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(data => console.log(data));
    }


    render() {

        return(
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Post title:</label> <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Post description:</label> <br />
                        <input type="text" name="description" value={this.state.description} onChange={this.onChange}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;