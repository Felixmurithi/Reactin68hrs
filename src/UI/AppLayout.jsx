import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Header />
      <main className="align-center min-w-full overflow-y-auto pb-8 pl-[300px] pr-[300px] pt-8 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
