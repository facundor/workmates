import React, { useState, useEffect } from "react";
import WorkmateService from "../services/WorkmateService";
import Workmate from "./Workmate";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';



function WorkmateList() {
  const [workmates, setWorkmates] = useState([]);

  const [token, setToken] = useState("");

  const loadWorkmates = (e) =>{
    e.preventDefault();

    const workmateService = new WorkmateService();
    const usersPromise = workmateService.getUsers(token);
    console.log("saved token:" + token)

    usersPromise.then((data) => {
      
      setWorkmates(data.data)
    }).catch(err => { console.log(err)});
  }

  return (
    <div>
      <h1>Workmates!</h1>

      <GoogleReCaptchaProvider reCaptchaKey="6LebiOkUAAAAAB7Blm6plmnHjUXxDkav3elOVBPR">
        <GoogleReCaptcha onVerify={token => setToken(token)} />
      </GoogleReCaptchaProvider>

      <form onSubmit={loadWorkmates}>
        <input type="submit" className="button-primary u-full-width"/>
      </form>

      <table>
        <tbody>
          {workmates.map((person) => (
            <Workmate key={person._id} workmate={person} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkmateList;
