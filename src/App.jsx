import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Fundamentals from "./pages/Fundamentals";
import AppLayout from "./UI/AppLayout";
import Routing from "./02-routing/Routing";
import SetUp from "./04-setup/SetUp";
// const Fundamentals = lazy(() => import("./pages/Fundamentals"));
// const AppLayout = lazy(() => import("./UI/AppLayout"));
// const Spinner = lazy(() => import("./UI/Spinner"));
// const Routing = lazy(() => import("./02-routing/Routing"));
// const SetUp = lazy(() => import("./04-setup/SetUp"));

// useref. use effect cleanup cutsom hook useReducer contenxtAPI, url data routing fake auth redux old redux new   supabase-auth modal + menu

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="/fundamentals" />} />
          <Route path="fundamentals" element={<Fundamentals />} />
          <Route
            path="fundamentals/:id"
            element={<Navigate to="/fundamentals" />}
          />
          <Route path="setup" element={<SetUp />} />
          <Route path="routing" element={<Routing />} />

          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
