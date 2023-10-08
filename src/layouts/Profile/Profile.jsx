import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import { NavLink } from "react-router-dom";

const Profile = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="min-h-[700px] text-center">
            <div className="my-10">
                <div>
                    <img src={Logo} className="w-[250px] mx-auto" alt="" />
                </div>
                <div className="text-2xl md:text-4xl font-bold my-10">Profile Details:</div>
                <img src={user?.photoURL ? user?.photoURL : avatar} className="w-[150px] block mx-auto" alt="" />
                <p>Image</p>
                <div className="my-5">
                    <h2 className="text-2xl">Name: {user?.displayName ? user?.displayName : 'Please set your name from setting'}</h2>
                    <h2 className="text-2xl my-4">Email: {user?.email ? user?.email : 'Please set your email from settings'}</h2>
                    <h2 className="text-2xl">User ID: {user?.uid ? user?.uid : 'Please set your name in profile'}</h2>
                </div>
                <NavLink to='/settings'><button className="btn btn-secondary">Update Profile</button></NavLink>
            </div>
        </div>
    );
};

export default Profile;