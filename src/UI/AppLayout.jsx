import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <page className="grid h-screen grid-rows-[auto_1fr]  ">
      <Header />
      <main className="align-center min-w-full overflow-y-auto overflow-x-clip px-[20px] pb-8 pt-8  md:px-[80px] lg:px-[300px] ">
        <Outlet />
      </main>
    </page>
  );
}

export default AppLayout;
