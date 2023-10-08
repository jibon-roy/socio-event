import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/auth";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);



    const emailPasswordUser = (name, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user) {
                    updateProfile(result.user, {
                        displayName: name
                    })
                }
                console.log(result);
            })
            .catch();
    }
    const gmailUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const gitUser = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const logOut = () => {
        signOut(auth)
            .then()
            .catch()
    }

    const data = { emailPasswordUser, gmailUser, gitUser, user, loading, logOut }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;