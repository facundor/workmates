import React from "react";
import WorkmateList from "./components/WorkmateList";

function App() {

  const url = `http://localhost:4000/users`;

  return (
    <div className="container">
      <WorkmateList url={url}/>
    </div>
  );
}

export default App;
