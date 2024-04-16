import {
  Route,
  Routes
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nabbar from "./Components/Navbar/Nabbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
const App = () => {
  return (
    <>
      <div className="app">
        <Nabbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;