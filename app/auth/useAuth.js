import jwtDecode from "jwt-decode";
import { useContext } from "react";

import AuthContext from "./context";
import authStorage from './storage';

export default useAuth = () => {
    const { setUser, user } = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    };

    const logIn = authToken => {
        setUser(jwtDecode(authToken));
        authStorage.storeToken(authToken);
    };

    return { logOut, logIn, user };
};