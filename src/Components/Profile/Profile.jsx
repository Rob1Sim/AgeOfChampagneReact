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
  const { t } = useTranslation("profile");
  return (
    <main className="profile-data">
      {userData !== null ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {userData !== undefined ? (
            <>
              <h1 className="ProfilTypoTitre">
                {t("Profil-Hello")} {userData.login}
              </h1>
              <div className="donneesProfil">
                <p>
                  <strong>Login :</strong> {userData.login}
                </p>
                <p>
                  <strong>Email </strong>: {userData.email}
                </p>
              </div>
              {isEditing ? (
                <EditProfile userData={userData} cancelCallBack={setEditing} />
              ) : (
                <button
                  className="btn_btn-lg_btn-primaryProfil"
                  type="button"
                  onClick={() => setEditing(!isEditing)}
                >
                  {isEditing ? t("Cancel-Submit") : t("Profile-Edit")}
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
