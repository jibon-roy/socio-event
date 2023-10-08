import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
                    toast.success('Register successful', {
                        position: "top-right",
                        autoClose: 3000
                    })
                }

            })
            .catch(err => {
                if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('Email already exists', {
                        position: "top-right",
                        autoClose: 3000
                    })
                } else {
                    toast.error('Register not successful', {
                        position: "top-right",
                        autoClose: 3000
                    })
                }
            }

            )
    }
    const gmailUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                if (result)
                    toast.success('Log in Successful', {
                        position: "top-right",
                        autoClose: 3000
                    })
            })
            .catch(toast.error('Log in unsuccessful', {
                position: "top-right",
                autoClose: 3000
            })
            )
    }
    const gitUser = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
            .then(toast.success('Log in Successful', {
                position: "top-right",
                autoClose: 3000
            }))
            .catch(toast.error('Log in unsuccessful', {
                position: "top-right",
                autoClose: 3000
            })
            )
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user)
                    toast.success('Log in Successful', {
                        position: "top-right",
                        autoClose: 3000
                    })
            })
            .catch(err => {
                console.log(err.message);
                if (err.message === 'Firebase: Error (auth/missing-email).') {
                    toast.error('Email not found', {
                        position: "top-right",
                        autoClose: 3000
                    })
                } else if (err.message === 'Firebase: Error (auth/invalid-login-credentials).') {
                    toast.error('Email or Password doesn\'t matched', {
                        position: "top-right",
                        autoClose: 3000
                    })
                }

            })
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
            .then(toast.success('Log out Successful', {
                position: "top-right",
                autoClose: 3000
            }))

    }

    const data = { emailPasswordUser, gmailUser, gitUser, logInUser, user, loading, logOut }

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