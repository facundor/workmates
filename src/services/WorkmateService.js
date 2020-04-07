import axios from "axios";

class WorkmateService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

   async getUsers() {
    try{
      const result = await axios.get("http://localhost:4000/users");
      console.log("resultado: " + result);
      return await result;
    }catch(error){
      console.log("error ocurred " + error)
    }
  }

}

export default WorkmateService;