// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import Home from "./pages/home";
// import register from './pages/register';
// import { Toaster } from "react-hot-toast";
// import Register from "./pages/register";


// function App() {

//   return (
//     <Router>
//       <Toaster/>
//       <Routes>
//         <Route path="/" element ={<Home/>}/>
//         <Route path="/login" element ={<div> login</div>}/>
//         <Route path="/register" element ={<Register/>}/>
//         <Route path="/contact" element ={<div> contact</div>}/>
//       </Routes>
//     </Router>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
import Footers from "./components/Footers";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";


function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<div>contact</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footers/>
    </Router>
  );
}

export default App;