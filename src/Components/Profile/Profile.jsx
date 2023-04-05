import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import EditProfile from "./EditProfile";
import UserContext from "../../contexts/user/index";
import "./Profile";

function Profile() {
  const { userData } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const { t } = useTranslation("editProfile");
  return (
    <main>
      <h1>
        {t("Profil-Hello")} {userData.login}
      </h1>
        <div>
            {userData.email}
        </div>
      {isEditing ? <EditProfile userData={userData} /> : ""}
      <button type="button" onClick={() => setEditing(!isEditing)}>
        {isEditing ? t("Profil-Cancel") : t("Profil-Edit")}
      </button>
    </main>
  );
}

export default Profile;
