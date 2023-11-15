
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Main from "./components/layout/Main";
import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import { useContext } from "react";

const AuthRoute = () => (
    <Main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />

        </Routes>
    </Main>
)

const NonAuthRoute = () => (
    <Routes>
        <Route path="/" element={<SignIn />} />
    </Routes>
)

function Layout() {
    const { auth,setAuth } = useContext(AuthContext);
    return (
        !auth ?  <NonAuthRoute /> : <AuthRoute />
    );
}

export default Layout;
