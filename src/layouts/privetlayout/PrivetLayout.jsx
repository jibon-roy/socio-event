import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import 'react-toastify/dist/ReactToastify.css';


const PrivetLayout = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (<div className="flex w-full h-[80vh] items-center justify-center">
            <span className="loading loading-ball loading-lg"></span>
        </div>);
    }

    if (user) {
        return children;
    } else {
        return (
            <>
                <Navigate to='/login'></Navigate>
            </>
        )
    }
};

PrivetLayout.propTypes = {
    children: PropTypes.node
}

export default PrivetLayout;