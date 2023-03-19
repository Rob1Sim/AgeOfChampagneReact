import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserContext from "./index";
import { getMe } from "../../services/api/users";

function Provider({ children }) {
  const [userData, setUserData] = useState(undefined);
  const [value, setValue] = useState({ userData });
  useEffect(() => {
    getMe().then((user) => {
      setUserData(user);
    });
  }, []);

  useEffect(() => {
    setValue({ userData });
  }, [userData]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Provider;
