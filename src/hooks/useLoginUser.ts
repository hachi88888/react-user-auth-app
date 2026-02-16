import { useContext } from "react"

import { LoginUserContext, type LoginUserContextType } from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType => { const context = useContext(LoginUserContext);

if (!context) {
  throw new Error(
    "useLoginUser must be used within LoginUserProvider"
  );
}

return context;
};