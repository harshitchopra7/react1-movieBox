import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";

function App() {
  const isUserLoggedIn = false;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={isUserLoggedIn ? " " : <LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
