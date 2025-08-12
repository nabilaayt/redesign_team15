import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// Components
import Navbar from "./components/Navbar";

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  )
}

export default App;
