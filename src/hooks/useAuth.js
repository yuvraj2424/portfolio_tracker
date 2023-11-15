import { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {

    const [auth, setData] = useState(null);
    const { setItem, getItem } = useLocalStorage();

    useEffect(() => {
        const value =JSON.parse(getItem('auth'));
        if (value) {
            setAuth(value)
        }
    }, [])

    const setAuth = (val) => {
        setData(val);
        setItem('auth', JSON.stringify(val));
    }


    return { auth, setAuth }
};