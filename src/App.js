import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

import Content from './components/content/Content';
import Favicon from 'react-favicon';
import favIcon from "../src/assets/hacker.png"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Favicon url={favIcon} iconSize={40} animated={true} />
        <Content />
      </div>
    </BrowserRouter>

  );
}

export default App;
