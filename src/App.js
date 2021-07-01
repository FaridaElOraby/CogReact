import React, { useState } from "react";
import UnityComponent from "./Components/UnityComponent";
import UnityForm from "./Components/UnityForm";
import Welcome from "./Components/Welcome";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [doneServey, setDoneSurvey] = useState(false);

  function changeScene() {
    setDoneSurvey(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      {doneServey ? (
        <UnityComponent token={token} username={username} />
      ) : (
        <div>
          {" "}
          <Welcome />
          <UnityForm
            setToken={setToken}
            setUsername={setUsername}
            changeScene={changeScene}
          />
        </div>
      )}
    </div>
  );
}

export default App;
