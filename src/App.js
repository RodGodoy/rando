import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting'

const App = () => {
  return (
    <>
    <Greeting name="Rod" favNumber="22"/>
    <Greeting name = "Yuliya" favHusband = "Rod"/>
    </>
  );
}

export default App;
