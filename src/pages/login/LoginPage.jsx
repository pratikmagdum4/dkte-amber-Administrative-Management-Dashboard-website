import React, { useEffect, useState } from "react";
import { StudentMale, AdministratorMale, Interviewer, SignUpLoginHome } from '@/assets/';
import Navbar from "../navbar/Navbar";
import AuthButton from "../../components/ui/AuthButtom";
import { LogIn } from "lucide-react";
import { HomeLink, LoginNavLink } from "../../components/variables/variables";
import { useSelector } from "react-redux";
import { selectCurrentRole } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/ui/Loader";
import axios from "axios";
import { BASE_URL } from "../../api";

function LoginPage() {
    const [isSmallScreen, setIsSmallerScreen] = useState(false);
    const navigate = useNavigate();
    const [connected, setConnected] = useState(false);
    const [ArticleList, setArticleList] = useState([]);

    useEffect(() => {
        const func = async () => {
            try {

                const response = await axios.get(`${BASE_URL}/api/article/get`);


                // const articles = response.data.map(article => ({
                //     ...article,
                //     selfImage: article.selfImage.replace(/^"|"$/g, '')
                // }));
                // setArticleList(articles);


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

    const role = useSelector(selectCurrentRole);

    useEffect(() => {
        if (role === "clerk") {
            navigate("/login/clerk/deptlist/deptlogin/home");
        }
        if (role === "admin") {
            navigate("/login/admin/home");
        }
        if (role === "faculty") {
            navigate("/login/co-faculty/verify-article");
        }
    }, [role, navigate]);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallerScreen(window.innerWidth <= 600);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            {!connected ? (
                <Loading links={LoginNavLink} />
            ) : (
                <div>
                    <div>
                        <Navbar links={LoginNavLink} />
                    </div>
                    <div className={isSmallScreen ? "flex flex-col items-center justify-center h-screen bg-zinc-100 dark:bg-zinc-800 space-y-4" : "flex flex-row items-center justify-center h-screen bg-zinc-100 dark:bg-zinc-800 space-x-8"}>
                        <AuthButton
                            imageUrl={AdministratorMale}
                            altText="Clerk Login"
                            buttonText={"Clerk Login"}
                            buttonUrl={"/login/clerk/deptlist"}
                            isSmallScreen={isSmallScreen}
                        />
                        <AuthButton
                            imageUrl={AdministratorMale}
                            altText={"Admin Login"}
                            buttonText={"Admin Login"}
                            buttonUrl="/login/admin"
                            isSmallScreen={isSmallScreen}
                            className={isSmallScreen ? "text-sm" : ""}
                        />
                        <AuthButton
                            imageUrl={AdministratorMale}
                            altText={"Faculty Login"}
                                buttonText={"Faculty Login"}
                            buttonUrl="/login/co-faculty"
                            isSmallScreen={isSmallScreen}
                            className={isSmallScreen ? "text-sm" : ""}
                        />
                    </div>
                    <div className="bg-zinc-100 flex justify-center">
                        {/* <img src={SignUpLoginHome} alt="" /> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default LoginPage;
