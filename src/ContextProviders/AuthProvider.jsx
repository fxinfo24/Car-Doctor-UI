import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.config'

// Step 1: Create a context and export it for using from anywhere
export const AuthContext = createContext(null);

// Step 2: Set 'children' object and use it inside AuthContext.Provider
const AuthProvider = ({children}) => {
    // Set users state
    const [users, setUsers] = useState(null)
    // Step 5: Prevent route to auto login page after authentication
    const [loader, setLoader] = useState(true)

    //   Step 4: Create Context objects as needed
    // step 4.1 - Create user object
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //  Step 4.2 - Create Login object
    const logInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Step 4.3 - Create Log Out object
    const logOutUser = () => {
        setLoader(true)
        return signOut(auth);
    };

    // Step 5.1: Unsubscribe useEffect: If user logged in or not. The recommended way to get the current user is by setting an observer on the Auth object
    // 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log('Logged in user inside auth state observer', loggedUser);
            setUsers(loggedUser);
            setLoader(false);
        });
        return () => unsubscribe();
    } , [])
    
    // Step 3: Create Auth context object for Provider values
    const authInfo = {
        users,
        createUser,
        logInUser,
        loader,
        logOutUser
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;