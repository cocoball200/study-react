import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: ''
    }

    handleChange = (e) => {
        alert(this.state.message)
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Hello React with event</h1>
                <input
                    type='text'
                    name='message'
                    placeholder='writie'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }

}
export default EventPractice;