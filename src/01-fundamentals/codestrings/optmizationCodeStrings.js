export const color = `
function Color() {
    const color = \`rgb(\${[1, 2, 3].map(() => (Math.random() * 256) | 0)})\`;
    return (
      <div
        style={{ backgroundColor: color }}
        className="h-5 w-5 self-center"
      ></div>
    );
  }`;
export const timer = `
function Now() {
    const [time, setTime] = useState(formatTime(new Date()));
  
    useEffect(
      function () {
        const id = setInterval(function () {
          setTime(formatTime(new Date()));
        }, 1000); 
        return function cleanup() {
          clearInterval(id);
        };
      },
    );
    ...}`;

export const memoComponent = `
const RandomColor = memo( function Color(){
    ...
});`;
export const childrenRerendering = `
        <Component> 
        <Color/>
        </Component> 

function Component({children }){
    return 
    <div
    {children}
    </div>
}`;
export const childrenRerenderingContext = `
<Provider>  <Color /> </Provider>


 {...
const [boxCheck, setBoxCheck] = useState(false);
return (
  <Provider>
      <Context.Provider value={{boxCheck}}>
            {children}
            <Color />
            <input
              type="checkbox"
              onChange={(e) => {
                setBoxCheck(e.target.checked);
              }}
            />
      </Context.Provider>
  <Provider>)}`;
export const childrenConsumerRerenderingContext = `
export function Time() {
  const { time } = useTime();
  return <span className="mx-auto  block max-w-fit">Its {time}</span>;
}

export function BgColor() {
  const { boxCheck } = useTime();
}`;

export const memoizedObjectValue = `
{...
const value = useMemo(() => {
  return { time };
}, [time]);

return (
  <Provider>
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  <Provider>

<Provider>
    <BgColor/>
</Provider>`;
export const notMemoizedObjectValue = `
{...

const value =  { time };

return (
      <Provider>
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
      <Provider>

 <Provider>
        <BgColor/>
  </Provider>
  `;
