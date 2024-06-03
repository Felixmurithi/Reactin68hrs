export const browswerouter = `
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
<BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
        <Route path="anyname" element={<Component />} />
        <Route path="anyname/:dynamicparam" element={<Component />} />
          </Route>
        </Routes>
`;

export const links = `
<Link to="fundamentals">Fundamentals</Link>
<Link to="page/id">Fundamentals</Link>
<Link to="page/id?item=1">Fundamentals</Link>
<NavLink to="declaredpath">DisplayName</NavLink>
`;

export const navlinkcssclass = `
a.active {
    @apply text-emerald-600 underline;
    `;
export const navlinkclassname = `
<NavLink
  to="/messages"
  className={({ isActive }) => (isActive ? "active" : "notactive")}>`;

export const usenavigate = `
const navigate = useNavigate();
navigate(-1);
navigate("/");
navigate("/app", { replace: true })
`;
export const navigate = `
<Route path="fundamentals" element={<Fundamentals />} />
<Route index element={<Navigate replace to="/fundamentals" />} />
<Route path="fundamentals/:id" element={<Navigate to="/fundamentals" />}
            /> `;
export const nested = `
function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="/fundamentals" />} />
              <Route path="fundamentals" element={<Fundamentals />} />
              <Route
                path="fundamentals/:id"
                element={<Navigate to="/fundamentals" />}
              />
              <Route path="setup" element={<Setup />} />
              <Route path="routing" element={<Routing />} />
              <Route path="*" />
            </Route>
          </Routes>
      </BrowserRouter>
    );
  }`;

export const outlet = `
function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Header />
      <main className="align-center min-w-full overflow-y-auto pb-8 pl-[300px] pr-[300px] pt-8 ">
        <Outlet></Outlet>
      </main>
    </div>
  );
}`;
export const dynamicparam = `
  const {declaredDyamicParam}= useParams()
`;
export const setsearchparam = `
<Link to="page/id?item=1">Fundamentals</Link>

const [searchparams, setSearchParams] = useSearchParams();
searchParams.set("amount", value)
setSearchParams(searchParams)`;
export const getsearchparam = `
const [searchparams, setSearchParams] = useSearchParams();
const searchparamValue= searchParams.get("amount)`;
