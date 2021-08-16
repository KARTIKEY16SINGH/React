import React, { useState, useEffect } from 'react';
import './App.css';
import restaurant from "./restaurant.jpg"

function SecretComponent() {
  return <h1>Secret information for authorized users only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

// function toggle() {
//   setChecked((checked) => !checked);
// }

// https://api.github.com/users/kartikey16singh


function App({ login }) {
  return (
    <div>
      <h1>Hello React Testing Librarby </h1>
    </div>);
  // if (props.authorized) {
  //   return <SecretComponent />;
  // } else {
  //   return <RegularComponent />;
  // }
}

export default App;
