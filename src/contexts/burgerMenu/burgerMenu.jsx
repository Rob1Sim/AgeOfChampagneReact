import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import BugerButtonContext from "./index";

/**
 * Permet de récupérer la valeur d'ouverture du menu burger (Si le menu est ouvert opened sera à True ...)
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function BurgerMenuProvider({ children }) {
  const [opened, setOpen] = useState(false);
  const contextValue = useMemo(() => ({ opened, setOpen }), [opened, setOpen]);
  return (
    <BugerButtonContext.Provider value={contextValue}>
      {children}
    </BugerButtonContext.Provider>
  );
}
BurgerMenuProvider.prototype = {
  children: PropTypes.node.isRequired,
};

export default BurgerMenuProvider;
