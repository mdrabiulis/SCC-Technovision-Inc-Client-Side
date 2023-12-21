import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";


const useAuthContext = () => {
    const authContext = useContext(AuthContext)
    return authContext
};

export default useAuthContext;