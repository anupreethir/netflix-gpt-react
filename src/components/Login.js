import logo from "../assests/netflix_logo.png";
import nLogo from "../assests/N logo.png";
import login_bg from "../assests/login_bg.jpg";
import { useRef, useState } from "react";
import { validateData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"
import Header from "./Header";




// import TextField from '@mui/material/TextField';
const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const changeSignUp = () => {
        console.log("click")
        setIsSignIn(!isSignIn)
    }
    const checkValidData = () => {
        const message = validateData(name?.current?.value, email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignIn) {
            // sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                    }).catch((error) => {
                        setErrorMessage(`${errorMessage}`);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        } else {
            // sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });

        }
    }

    return (
        <div className="">
            {/* <div className="w-[100%] fixed  z-20 p-2">
                <div className="left-0 right-0 flex justify-between items-center mx-auto w-[97%]">
                    <img src={logo} alt="logo" className="w-32 hidden  md:block" />
                    <img src={nLogo} alt="logo" className="w-4 block md:hidden" />
                </div>
            </div> */}
            <Header></Header>
            <div className="absolute">
                <img src={login_bg} alt="login-background" className="bg-gradient-to-b from-black z-[-1] fixed w-[100%] h-screen object-cover" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-lightBlack bg-opacity-70 md:w-[35%] w-[60%] flex flex-col items-center m-auto md:px-5 md:py-10 py-5 px-2 rounded-lg absolute mt-[5%]  mx-auto right-0 left-0">
                <h1 className="mr-0 w-[70%] text-3xl md:mb-5 mb-3 text-white md:font-medium font-normal">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignIn && (<><input type='text' ref={name} placeholder='User Name' className='w-[70%] p-[10px] mb-3 rounded-lg focus-visible:outline-none bg-[#333] text-white' /><br /></>)}
                <input ref={email} type="text" placeholder="Email address" className="w-[70%] p-[10px] mb-3 rounded-lg focus-visible:outline-none bg-[#333] text-white " />
                <br />
                <input ref={password} type="password" placeholder="Password" className="w-[70%] p-[10px] mb-3 rounded-lg focus-visible:outline-none bg-[#333] text-white" />
                <br />
                {/* <TextField id="filled-basic" label="Password" variant="filled" className="bg-white text-black" /> */}
                <p className="text-red w-[70%] mr-0 mb-2">{errorMessage}</p>
                <button className="bg-red w-[70%] p-[7px] rounded-lg text-white font-medium text-lg md:mb-3 mb-2" onClick={checkValidData}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="text-white w-[70%] mr-0" >{isSignIn ? "New to Netflix? " : "Already have an account? "} <span onClick={changeSignUp} className="cursor-pointer">{isSignIn ? "Sign Up Now" : "Sign In"}</span></p>
            </form>
        </div>
    )
};
export default Login;