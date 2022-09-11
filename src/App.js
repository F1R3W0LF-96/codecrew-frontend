import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


import Content from './components/content/Content';
import Favicon from 'react-favicon';
import favIcon from "../src/assets/hacker.png"
function App() {
  return (
    <GoogleOAuthProvider clientId="173588754969-afjs5v5th8a40rmm195purrrounv98pd.apps.googleusercontent.com">

    <BrowserRouter>
      <div className="App">
        <Favicon url={favIcon} iconSize={40} animated={true} />
        <Content />
      </div>
    </BrowserRouter>
    </GoogleOAuthProvider>

  );
}

export default App;
