import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { patchUser } from "../../services/api/users";
import "./EditProfile.css";

function EditProfile({ userData }) {
  const [userLogin, setUserLogin] = useState(userData ? userData.login : "");
  const [userEmail, setUserEmail] = useState(userData ? userData.email : "");
  const [userPassword, setUserPassword] = useState("");
  const { t } = useTranslation("editProfile");

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
    <form onSubmit={handleSubmit} className="formu">
      <div className="update-prof">
        <div className="gotham-text">
          <label htmlFor="name">{t("Edit-Login")}</label>
          <input
            type="text"
            id="name"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
            required
          />
        </div>
        <div className="gotham-text">
          <label htmlFor="email">{t("Edit-Email")}</label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div className="gotham-text">
          <label htmlFor="password">{t("Edit-Password")}</label>
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn_update">
            {t("Edit-Submit")}
          </button>
        </div>
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
