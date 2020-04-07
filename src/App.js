import React, { useState, useEffect } from "react";

import WorkmateList from "./components/WorkmateList";
import WorkmateService from "./services/WorkmateService";

function App() {
  const [moneyType, saveMoneyType] = useState("");
  

  useEffect(() => {
    if (coinType === "" || moneyType === "") {
      return;
    }

    const url = `https://hello-ms.k8s.fluxit.com.ar/users`;
    const workmateService = new WorkmateService();
    const workmateList = workmateService.getUsers(url);

    const workmatesListResult = async () => {
      const value = await workmateList;
      loadList(value);
    };

    coinsDetail();
  }, [moneyType, coinType]);

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen criptomonedas" className="logtipo" />
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al Instante</h1>
          <Formulario
            saveMoneyType={saveMoneyType}
            saveCoinType={saveCoinType}
          />

          <Quotation coinInfo={coinInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
