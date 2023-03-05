import './App.css';
/* 추가 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import Home from './Home' */
import Window from './Windows/Window'
import Bios from './Bios/Bios'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
          <BrowserRouter>
            <Routes>
                {/* <Route path={"/"} element={<Home />}></Route> */}
                <Route path={"/"} element={<Bios />}></Route>
                <Route path={"/Window"} element={<Window />}></Route>
            </Routes>
          </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
