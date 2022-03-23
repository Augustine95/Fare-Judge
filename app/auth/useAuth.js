// import jwtDecode from "jwt-decode";
import { useContext } from "react";

import AuthContext from "./context";

export default useAuth = () => {
    const { setUser, user } = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        // authStorage.removeToken();
    };

    const logIn = values => {
        setUser(values);
        // setUser(jwtDecode(authToken));
        // authStorage.storeToken(authToken);
    };

    return { logOut, logIn, user };
};