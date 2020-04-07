import axios from "axios";

class WorkmateService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

   async getUsers() {
    try{
      console.log("process.env.REACT_APP_USERS_API_URL: " + process.env.REACT_APP_USERS_API_URL);
      const result = await axios.get(process.env.REACT_APP_USERS_API_URL);
      return await result;
    }catch(error){
      console.log("error ocurred " + error)
    }
  }

}

export default WorkmateService;