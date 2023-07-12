import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillMail } from "react-icons/ai";
import { RiTempColdLine } from "react-icons/ri";
import { FaBitcoin } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <h1>Demo</h1>
      <AiFillMail />
      <RiTempColdLine />
      <FaBitcoin className='demo' />
    </div>
  );
}

export default App;
