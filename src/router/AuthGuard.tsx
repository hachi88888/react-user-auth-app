import { memo, type FC, ReactNode } from "react"
import { Navigate } from "react-router-dom";

import { useLoginUser } from "../hooks/useLoginUser"

type Props = {
  children: ReactNode;
}

export const AuthGuard: FC<Props> = memo(({ children }) => {
  const { loginUser } = useLoginUser();
 
  if (!loginUser) return <Navigate to="/" replace />

  return <>{children}</>;
});