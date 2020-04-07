import axios from "axios";

class WorkmateService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

   async getUsers() {
    const resultado = await axios.get(this.apiUrl);
    console.log("resultado: " + resultado);
    return resultado;
  }

}

export default WorkmateService;