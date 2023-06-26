import './App.css';
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/routerConfig"

const App = () => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
)

export default App;

// const App = () => {

//   useEffect(() => {
//         globalStyles()
//       }, [])

//   return <BrowserRouter>
//       <RouterConfig />
//     </BrowserRouter>

// }

// export default App;

// const App = ({ RouterConfig, pageProps }: AppProps) => {
//   useEffect(() => {
//     globalStyles()
//   }, [])
//   return <BrowserRouter>
//       <RouterConfig {...pageProps}/>
//     </BrowserRouter>

// }
// export default App;
