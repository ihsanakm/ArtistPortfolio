import React from "react";
import Navigation from "./component/navigation/Navigation";
import Gallery from "./component/gallery/Gallery";
import About from "./component/about/about";


import {
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Shared from "./pages/Shared/Shared";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route path="artwork" element={<Gallery />} />
        <Route path="about" element={<About />} />
      </Route>

    
    )
  )


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

