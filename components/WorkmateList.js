import React from "react";
import Workmate from "./Workmate"

function WorkmateList({ url }) {
  const [workmates, setWorkmates] = useState([]);

  useEffect(() => {
    const workmateService = new WorkmateService();
    const workmateList = workmateService.getUsers(url);

    async () => {
      const value = await workmateList;
      setWorkmates(value);
    };
  });

  return (
    <table>
      {workmates.map( person => (
              <Workmate workmate={person}/>
            )) }
    </table>
  );
}

export default WorkmateList;
