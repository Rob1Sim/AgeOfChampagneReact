import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import BugerButtonContext from "./index";

function BurgerButtonProvider({ children }) {
  const [opened, setOpen] = useState(false);
  const contextValue = useMemo(() => ({ opened, setOpen }), [opened, setOpen]);
  return (
    <BugerButtonContext.Provider value={contextValue}>
      {children}
    </BugerButtonContext.Provider>
  );
}
BurgerButtonProvider.prototype = {
  children: PropTypes.node.isRequired,
};

export default BurgerButtonProvider;
