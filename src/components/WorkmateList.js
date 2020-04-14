import React, { useState, useEffect } from "react";
import WorkmateService from "../services/WorkmateService";
import Workmate from "./Workmate";
import ReCAPTCHA from "react-google-recaptcha";

function WorkmateList() {
  const [workmates, setWorkmates] = useState([]);

  const loadWorkmates = (e) =>{
    e.preventDefault();

    const workmateService = new WorkmateService();
    const usersPromise = workmateService.getUsers();

    usersPromise.then((data) => {
      setWorkmates(data.data)
    }).catch(err => { console.log(err)});
  }

  return (
    <div>
      <h1>Workmates!</h1>

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
