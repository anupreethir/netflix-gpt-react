import { useSelector } from "react-redux";
import logo from "../assests/netflix_logo.png";
import nLogo from "../assests/N logo.png"
import Profile from "./Profile";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"
import { useEffect } from "react";
import { toggleGptSearch } from "../utils/GptSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => { return store.user });
    const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browser');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, []);
    const handleGptClick = () => {
        dispatch(toggleGptSearch());
    }
    return (
        <div className="w-[100%] fixed  z-20 bg-black bg-opacity-50 p-2">
            <div className="left-0 right-0 flex justify-between items-center mx-auto w-[97%]">
                <img src={logo} alt="logo" className="w-32 hidden  md:block" />
                <img src={nLogo} alt="logo" className="w-4 block md:hidden" />

                <div className="flex items-center">
                    {user && <>
                        <button onClick={handleGptClick} className="cursor-pointer px-[10px] md:px-[20px]  md:h-[33px] h-[25px] text-sm md:text-lg text-white font-normal hover:bg-[#ffffff6b] bg-transparent border border-white rounded-[18px]">
                            {showGptSearch ? "Netflix" : "Netflix GPT"}</button>
                        <Profile></Profile></>}
                </div>
            </div>
        </div>
    )
};
export default Header;