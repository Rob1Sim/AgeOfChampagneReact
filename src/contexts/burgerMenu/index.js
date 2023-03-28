import { createContext } from "react";

/**
 * Stock la valeur de l'ouverture du menu burger pour ne plus afficher ce qu'il y a en dessous
 * ce qui évites des problèmes d'affichages
 * @type {React.Context<null>}
 */
const BugerButtonContext = createContext(null);
export default BugerButtonContext;
