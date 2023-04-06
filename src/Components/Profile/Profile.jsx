import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Redirect } from "wouter";
import EditProfile from "./EditProfile";
import UserContext from "../../contexts/user/index";
import "./Profile.scss";
import Loading from "../Loading/Loading";

function Profile() {
  const { userData } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const { t } = useTranslation("editProfile");
  return (
    <main>
      {userData !== null ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {userData !== undefined ? (
            <>
              <h1 className="ProfilTypoTitre">
                {t("Profil-Hello")} {userData.login}
              </h1>
              <div className="donneesProfil">
                {userData.login}
                {userData.email}
              </div>
              {isEditing ? (
                <EditProfile userData={userData} cancelCallBack={setEditing} />
              ) : (
                <button
                  className="btn_btn-lg_btn-primaryProfil"
                  type="button"
                  onClick={() => setEditing(!isEditing)}
                >
                  {isEditing ? t("Cancel-Submit") : t("Edit-Submit")}
                </button>
              )}
            </>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </main>
  );
}

export default Profile;
