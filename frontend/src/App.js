import React from "react";
import Navigation from "./component/navigation/Navigation";
import Gallery from "./component/gallery/Gallery";
import About from "./component/about/about";


import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Shared from "./pages/Shared/Shared";
function App() {
  
  return (
    
      <Routes>
        <Route  path="/" element={<Shared/>}>
          <Route index element={<Gallery/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    
  );
}

export default App;

