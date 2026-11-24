
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("No event yet");

  return (
    <div>
      <h1>Personal Portfolio</h1>

      <h2>Name: Rahul Sharma </h2>
      <p>ID: C65</p>

      <button onClick={() => {
        setShow(!show);
        setMessage("Toggle button clicked");
      }}>
        Toggle Details
      </button>

      {show && <p>I am a Student at KL University</p>}

      <br />

      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYLfi9KUAv9ZHxxJYcOhXiGLivJqSz4GOhkBKaCln-mB48CETV"
        alt="Profile"
        onClick={() => setMessage("Image clicked")}
        style={{ cursor: "pointer" }}
      />

      <br />

      <button onClick={() => setMessage("Contact button clicked")}>
        Contact Me
      </button>

    </div>
  );
}

export default App;
