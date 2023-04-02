import React, { useContext, useState } from "react";
import UserContext from "../../contexts/user/index";

function EditProfile() {
  const { userData } = useContext(UserContext);
  const [userLogin, setUserLogin] = useState(userData ? userData.login : "");
  const [userEmail, setUserEmail] = useState(userData ? userData.email : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userLogin !== "" && userEmail !== "") {
      // TODO Patch l'utilisateur courant
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Identifiant :</label>
        <input
          type="text"
          id="name"
          value={userLogin}
          onChange={(e) => setUserLogin(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          id="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Modifier</button>
      </div>
    </form>
  );
}

export default EditProfile;
