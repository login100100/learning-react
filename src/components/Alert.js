import React, { Component } from 'react'
import { connect } from 'react-redux'

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            message: ''
        }
    }

    render() {
        return (
            <div className={this.props.type}>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    type: state.alert.type,
    message: state.alert.message
});

export default connect(mapStateToProps, {})(Alert);