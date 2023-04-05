import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import EditProfile from "./EditProfile";
import UserContext from "../../contexts/user/index";
import "./Profile.css";

function Profile() {
  const { userData } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const { t } = useTranslation("editProfile");
  return (
    <main>
      <h1 className="ProfilTypoTitre">
        {t("Profil-Hello")} {userData.login}
      </h1>
      <div className="donneesProfil">
        {userData.login}
        {userData.email}
      </div>
      {isEditing ? <EditProfile userData={userData} /> : ""}
      <button
        className="btn_btn-lg_btn-primaryProfil"
        type="button"
        onClick={() => setEditing(!isEditing)}
      >
        {isEditing ? t("Profil-Cancel") : t("Profil-Edit")}
      </button>
    </main>
  );
}

export default Profile;
