import React from "react";

function Workmate({ workmate }) {
  const { name, surname } = workmate;
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
    </tr>
  );
}

export default Workmate;
