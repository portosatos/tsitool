import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./pages/main";
import Telegram from "./pages/telegram";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/telegram" element={<Telegram />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
