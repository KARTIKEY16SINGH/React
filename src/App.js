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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loafding...</h1>;

  if (error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (!data) return null;

  return (
    <div>
      <h1> {data.name} </h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div>);
  // if (props.authorized) {
  //   return <SecretComponent />;
  // } else {
  //   return <RegularComponent />;
  // }
}

export default App;
