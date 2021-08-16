import React, { useState, useEffect } from 'react';
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
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      {/* {
        authorized ? <SecretComponent /> : <RegularComponent />
      } */}

      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}>
        Happy
      </button>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrate
      </button>
      <button onClick={() => setEmotion("enthusiastic")}>
        Enthuse
      </button>
      <button onClick={() => setSecondary("crabby")}>
        Make Crabby
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
