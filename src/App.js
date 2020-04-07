import React from "react";
import WorkmateList from "./components/WorkmateList";

function App() {

  const url = `http://hello-ms.k8s.fluxit.com.ar/users`;

  return (
    <div className="container">
      <WorkmateList url={url}/>
    </div>
  );
}

export default App;
