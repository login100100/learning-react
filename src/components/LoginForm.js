import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/login.actions'
import { PropTypes } from 'prop-types'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const loginData = {
            login: this.state.login,
            password: this.state.password
        }

        this.props.login(loginData);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Login</label> <br />
                        <input type="text" name="login" value={this.state.login} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Password</label> <br />
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </div><br />
                    <button type="submit" className={this.props.loading ? 'loading' : ''}>Login</button>                    
                </form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loading: state.user.loading
})
export default connect(mapStateToProps, { login })(LoginForm);