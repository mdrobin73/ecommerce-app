import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/collection" element={<Collection></Collection>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/product/:productId" element={<Product></Product>}></Route>
                    <Route path="/cart" element={<Cart></Cart>}></Route>
                    <Route path="/place-order" element={<PlaceOrder></PlaceOrder>}></Route>
                    <Route path="/orders" element={<Orders></Orders>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default App;