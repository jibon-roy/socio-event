import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Logo from '../../assets/logo.png'


const Settings = () => {
    const [err, setErr] = useState('')
    const { user, updateUserProfileName, updateUserProfilePhoto } = useContext(AuthContext);

    const handleUpdate = (e) => {
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(photoUrl)) {
            e.preventDefault();
            setErr('Link invalid.');
            return;
        }
        updateUserProfileName(user, name);
        updateUserProfilePhoto(user, photoUrl);
        setErr('')

    }
    return (
        <div className="card min-h-[700px] max-w-2xl mx-auto text-center">
            <div>
                <img src={Logo} className="w-[250px] mx-auto" alt="" />
            </div>
            <h1 className="text-2xl md:text-4xl my-10">Update Profile</h1>
            <form onSubmit={handleUpdate} className="card-body">
                <label htmlFor="name" className="text-left">Update name:</label>
                <input type="text" id="name" name="name" placeholder="Update name" className="input input-bordered" required />
                <label htmlFor="url" className="text-left">Update photo:</label>
                <input type="text" id="url" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
                <div className="text-[red]">{err}</div>
                <button className="btn btn-secondary">Update profile</button>
            </form>
        </div>
    );
};

export default Settings;