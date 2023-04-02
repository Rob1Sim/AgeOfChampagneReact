import React, { useContext, useState } from "react";
import EditProfile from "./EditProfile";
import UserContext from "../../contexts/user/index";

function Profile() {
  const { userData } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  return (
    <main>
      <h1>Bonjour {userData.login}</h1>
      {isEditing ? <EditProfile userData={userData} /> : ""}
      <button type="button" onClick={() => setEditing(!isEditing)}>
        {isEditing ? "Annuler" : "Modifier son profil"}
      </button>
    </main>
  );
}

export default Profile;
