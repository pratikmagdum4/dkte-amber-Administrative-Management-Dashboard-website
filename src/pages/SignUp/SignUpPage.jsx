import React, { useEffect, useState } from "react";
import { StudentMale, AdministratorMale, Interviewer, SignUpLoginHome } from '@/assets/';
import Navbar from "../navbar/Navbar";
import AuthButton from "../../components/ui/AuthButtom";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentRole } from "../../redux/auth";
import axios from "axios";
import Loading from "../../components/ui/Loader";
import { LoginNavLink } from "../../components/variables/variables";
import { BASE_URL } from "../../api";

const links = [
    { label: 'Home', url: '/' },

    { label: 'login', url: '/login' },
    { label: 'Contact', url: '/' },
];
function SignUpPage() {
    const [connected, setConnected] = useState(false);
    const [isSmallScreen, setIsSmallerScreen] = useState(false);
    const navigate = useNavigate();
    const role = useSelector(selectCurrentRole)
    useEffect(() => {
        if (role === "clerk") {
            navigate("/login/clerk/deptlist/deptlogin/home")
        }
        if (role === "admin") {
            navigate("/login/admin/home")
        }
    }, [role]);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallerScreen(window.innerWidth <= 600);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    useEffect(() => {
        const func = async () => {
            try {

                const response = await axios.get(`${BASE_URL}/api/article/get`);
                if (response.data) {
                    setConnected(true);
                } else {
                    setConnected(false);
                }
            } catch (error) {
                (error);
                setConnected(false);
            }
        };

        func();
    }, []);
    return (
        <>
            {!connected ? (<Loading links={LoginNavLink} />) : (
                <div>
                    <div>
                        <Navbar links={links} />
                    </div>
                    <div className={isSmallScreen ? "flex flex-col items-center justify-center h-screen bg-zinc-100 dark:bg-zinc-800 space-y-4" : "flex flex-row items-center justify-center h-screen bg-zinc-100 dark:bg-zinc-800 space-x-8"}>
                        <AuthButton
                            imageUrl={AdministratorMale}
                            altText="Clerk Signup"
                            buttonText={"Clerk SignUp"}

                            buttonUrl={"/signup/clerk"}
                            isSmallScreen={isSmallScreen}
                        />
                        {/* <AuthButton
                            imageUrl={AdministratorMale}
                            altText={"Admin SignUp"}
                            buttonText={"Admin SignUp"}

                            buttonUrl="/signup/admin"
                            isSmallScreen={isSmallScreen}
                            className={isSmallScreen ? "text-sm" : ""}
                        /> */}

                    </div>
                    <div className="bg-zinc-100 flex justify-center">
                        {/* <img src={SignUpLoginHome} alt="" /> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default SignUpPage;
