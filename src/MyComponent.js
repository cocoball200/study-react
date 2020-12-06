import React from 'react';
import PropTypes from 'prop-types'

const MyComponent = ({ name, favoritNumber, children }) => {
    return (<div> Hello, My name is {name} <br />
    children 값은 {children} 입니다
        <br />
    My favorite number is {favoritNumber}.
    </div >
    );
};
MyComponent.defaultProps = {
    name: '기본이름 : Mia '
}
MyComponent.propTypes = {
    name: PropTypes.string,
    favoritNumber: PropTypes.number.isRequired
};

export default MyComponent;