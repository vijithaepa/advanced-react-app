import './App.css';
import {Button} from "./components/Button";
import {FaMoneyBill} from "react-icons/fa";

function App() {
  return (
    // <div className="App">

    <main className='App'>

      <Button className="green" size="lg" variant='success'>
        <FaMoneyBill/>
        Buy now!</Button>
      <Button className="green" size="lg" variant='warn'>
        <FaMoneyBill/>
        Buy now!</Button>
      <Button className="green" size="lg" variant='error'>
        <FaMoneyBill/>
        Buy now!</Button>
      <Button className="green" size="sm" variant='error'>
        <FaMoneyBill/>
        Buy now!</Button>
    </main>
    // </div>
  );
}

export default App;
