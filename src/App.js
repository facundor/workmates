import React from "react";
import WorkmateList from "./components/WorkmateList";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LebiOkUAAAAAB7Blm6plmnHjUXxDkav3elOVBPR"
      language="nodejs">
      <div className="container">
        <WorkmateList />
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default App;
