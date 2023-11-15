
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
import Layout from "./Layout";

function App() {
    const { auth, setAuth } = useAuth();
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <div className="App container">
                <Layout />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
