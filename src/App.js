import React from 'react';
import MyComponent from './MyComponent'
import './App.css';
import EventPractice from './EventPractice';

const App = () => {
  return (
    <div>
      <MyComponent name="Mia " favoritNumber={1004}>
        MIA </MyComponent>
      <EventPractice />
    </div>
  )
}

export default App;

