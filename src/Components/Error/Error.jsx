import React from "react";
import "./Error.scss";
import lost from "../../images/lost.svg";

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Oups ! La page que vous recherchez n&apos;existe pas</h2>
      <img src={lost} alt="Une personne qui est perdue" />
    </div>
  );
}

export default Error;
