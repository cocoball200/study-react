import React from 'react';
import './App.css';


function App() {
  const name = '리액트';
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'pink',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 20 //단위를 생략하면 px 가 디폴트 
      }}
    >
      {name}
    </div>
  );
}
export default App;
