import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const Header = () => {
    const [googleUser, setGoogleUser] = useState(null);
    const {user, logOut, auth} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    //google

const handleGoogleSignIn = ()=>{
    signInWithPopup(auth, provider)
    .then(result => {
        const loggedUser = result.user;
        setGoogleUser(loggedUser)

    })
    .catch(error => {
        console.log(error.message)
    })
}

//google signOut

const handleGoogleSignOut = ()=>{
    signOut(auth)
    .then(result=>{
        setGoogleUser(null)
    })
    .catch(error => {
        console.log(error.message)
    })
}
    return (
        <div>
            <div className="pb-5">
          
          <div className="bg-sky-100 p-3 w-full flex justify-between items-center">
              <h4 className="text-lg font-medium">Want to Signin With Google??</h4>
              <div>
                
              {
                        googleUser ?
                        <button onClick={handleGoogleSignOut} className="btn bg-sky-500">Google SignOut</button> :
                        <button onClick={handleGoogleSignIn} className="btn bg-sky-500">Google Login</button>
                    }



                  {
                      googleUser && <div>
                          <div className="flex gap-3">
                              <h2 className="text-lg">User: {googleUser.displayName}</h2>
                              <p className="text-lg">Email: {googleUser.email}</p>
                          </div>
                          <img src={googleUser.photoURL} alt="" />
                      </div>

                  }
              </div>

          </div>





      </div>
        </div>
    );
};

export default Header;