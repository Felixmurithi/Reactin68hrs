import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <page className="grid h-screen min-w-full grid-rows-[auto_1fr]">
      <Header />
      <main className="align-center overflow-y min-w-full overflow-x-clip pb-8 pt-8  sm:px-16 md:px-[80px] lg:px-[300px] ">
        <Outlet />
      </main>
    </page>
  );
}

export default AppLayout;
