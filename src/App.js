import React, { useReducer } from 'react';
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

function App({ authorized }) {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
  // if (props.authorized) {
  //   return <SecretComponent />;
  // } else {
  //   return <RegularComponent />;
  // }
}

export default App;
