import React from 'react';

const MyComponent = props => {
    return <div> Hello, My name is {props.name}</div>
};
MyComponent.defaultProps = {
    name: '기본이름 : Mia '
}

export default MyComponent;