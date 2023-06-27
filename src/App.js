import './App.css';
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/routerConfig"

const App = () => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
)

export default App;
