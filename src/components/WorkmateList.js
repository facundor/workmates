import React, { useState, useEffect } from "react";
import WorkmateService from "../services/WorkmateService";
import Workmate from "./Workmate";

function WorkmateList({ url }) {
  const [workmates, setWorkmates] = useState([]);

  useEffect((url) => {
    const workmateService = new WorkmateService(url);
    const usersPromise = workmateService.getUsers();

    usersPromise.then((data) => {
      setWorkmates(data.data)
    }).catch(err => { console.log(err)});
  }, []);

  return (
    <div>
      <h1>Workmates!</h1>
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
