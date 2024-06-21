import './App.css'
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';
import Contacts from './Components/Contacts/Contacts';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contacts/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
