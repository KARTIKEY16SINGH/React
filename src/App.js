import React, { useState } from 'react';
import './App.css';
import restaurant from "./restaurant.jpg"

function SecretComponent() {
  return <h1>Secret information for authorized users only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App({ authorized }) {
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion, setEmotion);
  return (
    <>
      {/* {
        authorized ? <SecretComponent /> : <RegularComponent />
      } */}

      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("happy")}>
        Happy
      </button>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrate
      </button>
      <button onClick={() => setEmotion("enthusiastic")}>
        Enthuse
      </button>
    </>
  );
  // if (props.authorized) {
  //   return <SecretComponent />;
  // } else {
  //   return <RegularComponent />;
  // }
}

export default App;
