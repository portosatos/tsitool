import "./styles/style.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Header from "./components/header/header"
import Footer from "./components/footer/footer";
import Main from "./pages/main"

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route  />
              <Route />
              <Route />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
