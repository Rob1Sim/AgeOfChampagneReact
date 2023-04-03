import React, { useState } from "react";
import PropTypes from "prop-types";
import { patchUser } from "../../services/api/users";

function EditProfile({ userData }) {
  const [userLogin, setUserLogin] = useState(userData ? userData.login : "");
  const [userEmail, setUserEmail] = useState(userData ? userData.email : "");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userData !== null &&
      userLogin !== "" &&
      userEmail !== "" &&
      userPassword !== ""
    ) {
      const newUser = {
        login: userLogin,
        password: userPassword,
        email: userEmail,
      };
      patchUser(userData.id, newUser);
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
          type="email"
          id="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Modifier</button>
      </div>
    </form>
  );
}

EditProfile.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default EditProfile;