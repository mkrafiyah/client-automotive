import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import {FaUserDoctor} from "react-icons/fa6";


const Navbar = () => {
const {user, logOut} = useContext(AuthContext);


const handleSignOut = () =>{
    logOut()
    .then(result=>{
        console.log(result.user)
      
    })
    .catch(error=>{
        console.error(error)
    })
}

    const navLinks = <>
     <li> <NavLink to='/' 
     style={isActive => ({
    color: isActive ? "blue" : "black"
  })}>Home</NavLink></li>
     
     <li><NavLink to='/addProducts' 
     style={isActive => ({
    color: isActive ? "blue" : "black"
  })}>Add Product</NavLink></li>
     
     <li> <NavLink to='/myCart' 
     style={isActive => ({
    color: isActive ? "blue" : "black"
  })}>My Cart</NavLink></li>
     
     <li><NavLink to='/login' 
     style={isActive => ({
    color: isActive ? "blue" : "black"
  })}>Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-sky-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-300 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-0">
                    {/* <img className="w-32 border" src="https://i.ibb.co/5YqP24z/logo.webp" alt="" /> */}
                    <img className="w-11 md:w-28 rounded-full" src="https://i.ibb.co/dkZm9H8/preview.png" alt="" />
                    <div className="btn btn-ghost text-base md:text-2xl font-bold border">Dream <span className="text-sky-600">Auto</span></div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                
                
                <div className="navbar-end">

                  
                {
                    user ?
                      <button onClick={handleSignOut} className="btn">Sign Out</button>
                    :
                    <Link to='/login'>
                    <button className="btn">Login</button>
                    </Link>
                }
                 {
                    user ? <span>{user.email}
                       <p>{user.displayName}</p>
                        <img className="w-10 rounded" src={user.photoURL} alt=""/>
                         <FaUserDoctor className="rounded w-10"></FaUserDoctor>
                         </span> : ''
                }
                
                
                    
                    
                    
                    
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;