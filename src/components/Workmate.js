import React from "react";

function Workmate({ workmate }) {
 
  return (
    <tr>
      <td className="resultado">{workmate.name}</td>
      <td className="resultado">{workmate.surname}</td>
    </tr>
  );
}

export default Workmate;
