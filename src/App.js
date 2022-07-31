import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";


import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Content />
        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;
