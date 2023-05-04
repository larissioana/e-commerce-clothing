import { GlobalStyle } from "./Globalstyle";
import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Shop from "./routes/Shop";
import Authentication from "./routes/Authentication";
import Checkout from "./routes/Checkout";
import { AnimatePresence } from "framer-motion";

const categories = [
  {
    id:1,
    title: 'Dresses',
    imageUrl: 'https://i.ibb.co/WySXWJD/pexels-godisable-jacob-16285237.png',
    route:'shop/dresses'
  },
  {
    id:2,
    title: 'Handbags',
    imageUrl: 'https://i.ibb.co/7gx6dpv/pexels-godisable-jacob-1000376.png',
    route:'shop/handbags'
  },
  {
    id:3,
    title: 'Accessories',
    imageUrl: 'https://i.ibb.co/425HfSL/pexels-godisable-jacob-1027161.png',
    route:'shop/accessories'
  },
  {
    id:4,
    title: 'Women',
    imageUrl: 'https://i.ibb.co/7WHmfXq/vladimir-yelizarov-f7j-F3e68-Co4-unsplash.png',
    route:'shop/women'
  },
  {
    id:5,
    title: 'Men',
    imageUrl: 'https://i.ibb.co/hW4Dpb5/pexels-el-sultan-3220386.png',
    route:'shop/men'
  },

]

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
