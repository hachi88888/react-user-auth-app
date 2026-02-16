import { memo, type FC } from "react";

import { Header } from "../organisms/layout/Header";
import { Outlet } from "react-router-dom";


export const HeaderLayout: FC　= memo(() => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
    </>
  )
});