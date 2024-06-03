import { ListContainer, ListItem } from "../UI/List";
import Note from "../UI/Note";
import { Article, Main, Paragraph, Section } from "../UI/Page";
import { H2, TextBold } from "../UI/Text";

function SetUp() {
  return (
    <Main>
      <Article>
        <Section className="flex flex-col gap-4">
          <h1>Project Setup</h1>
          <ListContainer>
            setting up React using vite and ESlint
            <ListItem>
              In the shell/terminal<TextBold>npm create vite@4</TextBold>
            </ListItem>
            <ListItem>
              Enter the project name, chooose React and Javascript in the next
              options.
            </ListItem>
            <ListItem>
              Open the shell/terminal in the project file created.
              <TextBold>npm install</TextBold>
            </ListItem>
            <ListItem>
              <TextBold>
                npm i eslint vite-plugin-eslint eslint-config-react-app
                --save-dev
              </TextBold>
            </ListItem>
            <ListItem>
              Create file
              <TextBold>.eslintrc.json</TextBold>
              and add
              <TextBold>{`{ "extends": "react-app" }`}</TextBold>to add react
              rules to eslint.
            </ListItem>
            <ListItem>
              vite.config.js file add
              <TextBold>import eslint from "vite-plugin-eslint";</TextBold>
              In the plugins
              <TextBold>array add eslint()</TextBold>
            </ListItem>
            <ListItem>
              .eslintrc.cjs file rules object add
              <TextBold>"react/prop-types": "off"</TextBold>,
              <TextBold>"no-unused-vars": "warn"</TextBold>,
              <TextBold>"react/no-unescaped-entities": "off",</TextBold>to
              prevent type checking runtime errors.
            </ListItem>
            <ListItem>
              delete all the
              <TextBold>.css</TextBold>at src folder and remove all the code
              from
              <TextBold>App.jsx</TextBold>
            </ListItem>
            <ListItem>
              <TextBold>npm run dev</TextBold>
            </ListItem>
          </ListContainer>
          <Note>
            To setup a React in vite node js needs to be pre-installed. Vite is
            the industry standard (redditors say) for building React
            applications. Component files use the .jsx exenstion.
          </Note>
        </Section>
        <Section>
          <H2>Tailwind CSS</H2>
          <ListContainer>
            <ListItem>
              Initiate setup using the
              <TextBold>tailwind with vite guide</TextBold>from the tailwind
              documentation docs.
            </ListItem>
            <ListItem>
              Add
              <TextBold>
                @tailwind base; @tailwind components; @tailwind utilities;
              </TextBold>
              in the index.css file.
            </ListItem>
            <ListItem>
              Add<TextBold>node: true</TextBold>to .eslintrc.cjs in the env
              object if not included.
            </ListItem>
            <ListItem>
              Install
              <TextBold>Tailwind CSS IntelliSense</TextBold>extension to show u
              what css properties and values are added by tailwind classes.
            </ListItem>
            <ListItem>
              Enter
              <TextBold>
                npm install -D prettier prettier-plugin-tailwindcss.
              </TextBold>
            </ListItem>
            <ListItem>
              Create<TextBold>prettier.config.cjs</TextBold>
              file, add
              <TextBold>
                {`module.exports = {
  plugins: ["prettier-plugin-tailwindcss"], };`}
              </TextBold>
            </ListItem>
            <Note>
              Read the tailwind docs, start with the tailwind
              <TextBold>preflight</TextBold> which adds base css styles.;
            </Note>
          </ListContainer>
        </Section>
        <Section>
          <H2>React Dev Tools</H2>
          <Paragraph>
            Install the React Dev Tools extension available for Chrome, Firefox
            and Edge browsers. It will add two panels
            <TextBold>Components</TextBold>and<TextBold>Profiler</TextBold> to
            the browser dev tools.To use the tools u may need to restart the
            browser and not opens react project in private mode.
          </Paragraph>
        </Section>
      </Article>
      <Article>
        <Section>
          <h1>Vercel Deployment</h1>
        </Section>
      </Article>
    </Main>
  );
}

export default SetUp;
