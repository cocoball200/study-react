import React, { Component } from 'react';
import PropTypes from 'prop-types'

/*
class MyComponent extends Component {
    render() {
        const { name, favoritNumber, children } = this.props;
        return (
            <div> Hello, My name is {name} <br />
    children 값은 {children} 입니다
                <br />
    My favorite number is {favoritNumber}.
            </div >

        )
    }
}

 */

class MyComponent extends Component {
    static defaultProps = {
        name: "default name"
    };

    static propTypes = {
        name: PropTypes.string,
        favoritNumber: PropTypes.number.isRequired
    };

    render() {
        const { name, favoritNumber, children } = this.props;
        return (
            <div> Hello, My name is {name} <br />
    children 값은 {children} 입니다
                <br />
    My favorite number is {favoritNumber}.
            </div >
        )
    }
}
/*
MyComponent.defaultProps = {
    name: '기본이름 : Mia '
}
MyComponent.propTypes = {
    name: PropTypes.string,
    favoritNumber: PropTypes.number.isRequired
};
*/

export default MyComponent;