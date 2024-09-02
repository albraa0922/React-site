import"./App.css" ;
import { BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import Sign from "./components/Pages/Sing";
import Home from "./components/Pages/Home";


function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Services' exact Component={Services}/>
          <Route path='/products' exact Component={Products}/>
          <Route path='/Sign' exact Component={Sign}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;