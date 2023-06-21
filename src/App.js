
import './App.css';
// import Home from './Home';
// import HomeContainer from './pages/Home/HomeContainer';
// import Index from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/routerConfig"

const App = () => {
  return <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>

}

export default App;