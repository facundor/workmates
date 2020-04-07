import React,{useState,useEffect} from "react";
import WorkmateService from "../services/WorkmateService"
import Workmate from "./Workmate"

function WorkmateList({ url }) {
  const [workmates, setWorkmates] = useState([]);

  useEffect(() => {
    const workmateService = new WorkmateService(url);
    const workmateList = workmateService.getUsers();

   const list = async () => {
      const value = await workmateList;
      setWorkmates(value);
    };
  });

  return (
    <table>
      {workmates.map( person => (
              <Workmate key={person._id} workmate={person}/>
            )) }
    </table>
  );
}

export default WorkmateList;
