import { GlobalStyle } from "./Globalstyle";
import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Shop from "./routes/Shop";
import Authentication from "./routes/Authentication";
import Checkout from "./routes/Checkout";
import { AnimatePresence } from "framer-motion";
import { categories } from "./data/categories-data";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
        <GlobalStyle/>
        <AnimatePresence mode="wait">
            <Navigation/>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home categories={categories}/>}/>
              <Route path='shop/*' element={<Shop/>}/>
              <Route path='auth' element={<Authentication/>}/>
              <Route path='checkout' element={<Checkout/>}/>
            </Routes>
        </AnimatePresence>
     </div>
  );
}

export default App;
