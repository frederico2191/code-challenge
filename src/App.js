
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/routerConfig"
// import { globalStyles } from '../stitches.config'
// import { useEffect } from 'react';


const App = () => {

  return <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>

}
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
