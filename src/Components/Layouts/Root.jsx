import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="max-w-7xl m-3 mx-auto min-h-screen">
            <Navbar></Navbar>
            <div className="max-w-6xl m-3 mx-auto">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;