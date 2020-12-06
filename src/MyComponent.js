import React from 'react';

const MyComponent = props => {
    return <div> Hello, My name is {props.name} <br />
    children 값은 {props.children} 입니다
    </div >
};
MyComponent.defaultProps = {
    name: '기본이름 : Mia '
}

export default MyComponent;