import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: ''
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type='text' name='message' placeholder='to write something'
                    value={this.state.message} onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    } />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>CHECK</button>
            </div>
        )
    }
}

export default EventPractice;