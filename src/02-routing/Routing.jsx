import URLState from "./URLState";
import { Article, Main, Paragraph, Section } from "../UI/Page";
import CodeHighlight from "../UI/CodeHighlight";
import {
  browswerouter,
  dynamicparam,
  getsearchparam,
  links,
  navigate,
  navlinkclassname,
  navlinkcssclass,
  nested,
  outlet,
  setsearchparam,
  usenavigate,
} from "./codeStrings";

function Routing() {
  return (
    <Article>
      <Section>
        <h1>React-Router</h1>
        <Paragraph>
          React Router DOM is a popular routing library for React web
          applications. React Router implements, single page routing , nested
          routes, dynamic URL parameters, URL search parameters and programatic
          navigation.
        </Paragraph>
        <Paragraph>
          All routes and dynamic parameters used in the application have to be
          declared in the BrowserRouter high order component. Each route is
          assigned a unique pathname, a component to render or a navigation
          route.
        </Paragraph>
        <CodeHighlight codeString={browswerouter} />
        <Paragraph>
          Navigation actions are implemented using special anchor elements
          implemented by React Router DOM, Link and the Navlink. These special
          links do not cause reloads in transitions mimicing single page
          routing. The routes and dynamic parameters used in the links have to
          be declared in the BrowserRouter.
        </Paragraph>
        <CodeHighlight codeString={links} />
        <Paragraph>
          The active NavLink receives the active css class links. The active
          status is included with NavLink className prop, itcan be be used to
          include custom css classes
        </Paragraph>
        <div className=" flex gap-4 sm:flex-wrap lg:flex-nowrap">
          <CodeHighlight codeString={navlinkcssclass} />
          <CodeHighlight codeString={navlinkclassname} />
        </div>
        <Paragraph>
          {`Programatic navigation is achieved using the navigate function from  useNavigate hook. The  <Navigate /> high order component is used instead of the navigate function when declaring routes`}
          . The Navigate HOC includes a replace prop. The navigate function
          recieves the route string as the first argument, it can receive a
          second argument, an object with the replace boolean property set to
          true. The replace prop/property removes the route where the redirect
          occured from the URL history and adds the redirected route in that
          position, moving back skips the route where the redirect occured.
        </Paragraph>
        <CodeHighlight codeString={usenavigate} />
        <CodeHighlight codeString={navigate} />
        <Paragraph>
          Nested routes require a root route which wraps the nested routes and
          an index route. The components in the nested routes are rendered in
          the Outlet HOC. The index route is rendered initailly, changing the
          route renders the component corresponding with the route.
        </Paragraph>
        <CodeHighlight codeString={nested} />
        <Paragraph>Outlet can be included in any child components.</Paragraph>
        <CodeHighlight codeString={outlet} />
        <Paragraph>
          Updating dynamic parameters and search parameters imitates state
          functionality. Values can be transfered to a different page component.
          Dynamic parameters are retrieved using the useParams hook which
          returns an object with all the dynamic parameters in the URL.
        </Paragraph>
        <CodeHighlight codeString={dynamicparam} />
        <Paragraph>
          Search parameters are set by the useSearchParams hook. They can be
          added directly to a link or added programatically.
        </Paragraph>
        <CodeHighlight codeString={setsearchparam} />
        <CodeHighlight codeString={getsearchparam} />
        <URLState />
      </Section>
    </Article>
  );
}

export default Routing;
