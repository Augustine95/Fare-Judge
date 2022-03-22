import * as SecureStorage from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = "authToken";

const storeToken = async authToken => {
    try {
        await SecureStorage.setItemAsync(key, authToken);
    } catch (error) {
        console.log("Error storing the auth token.", error);
    }
};

const getToken = async () => {
    try {
        return await SecureStorage.getItemAsync(key);
    } catch (error) {
        console.log("Error getting the auth token", error);
    }
};

const removeToken = async () => {
    try {
        await SecureStorage.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the auth token.", error);
    }
};

const getUser = async () => {
    const token = await getToken();
    return (token) ? jwtDecode(token) : null;
};

export default { getToken, getUser, removeToken, storeToken };
