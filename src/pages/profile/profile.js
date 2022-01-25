// depensies
import { useContext, useState, useEffect} from 'react'
import { useAuth } from '../../hook/useAuth'

//components
import Signout from '../../components/signout'

//context
import { AuthContext } from '../../context/authContext'

//theme-ui
/** @jsxImportSource theme-ui */


//style
import './profile.scss'
import containerStyle from '../../scssModule/container.module.scss'
import formStyle from '../../scssModule/form.module.scss'
import buttonStyle from '../../scssModule/button.module.scss'
import titleStyle from '../../scssModule/title.module.scss'
import avatarStyle from '../../scssModule/avatar.module.scss'

const Profile = ({ photoURL, setPhotoURL }) => {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);

    const { user } = useContext(AuthContext);
    const { uploadImage } = useAuth()

    useEffect(() => {
        const uloadPhotoURL = () => {
            if(!user?.photoURL) return

            setPhotoURL(user.photoURL)
        }
        uloadPhotoURL()
    }, [user, setPhotoURL])

    function handleChange(e) {
        if(!e.target.files[0]) return
        
        setPhoto(e.target.files[0])
    }

    function handleClick() {
        uploadImage(photo, user, setLoading);
    }

    return(
        <section className="profile">
            <div className={`profile__container ${containerStyle.container}`}>
                <div className="profile__body">
                    <form className={`profile__form ${formStyle.form}`} sx={{backgroundColor: 'formBackground'}}>
                        <h2 className={`profile__title ${titleStyle.title}`}>Profile</h2>
                        <label className="profile__label">
                            <img className={`profile__avatar ${avatarStyle.avatar}`} src={photoURL} alt="avatar" />
                            <input 
                                className="profile__file" 
                                id="file" 
                                type="file" 
                                onChange={handleChange} 
                                accept=".png,.jpg,.jpeg,.gif"
                            />
                        </label>

                        {photo !== null ? <span className="profile__arrow">☟</span> : ''}

                        <div className="profile__create">
                            <button 
                                disabled={loading || !photo} 
                                onClick={handleClick}
                                className={`profile__upload ${buttonStyle.button}`}
                            >Upload</button>
                            <Signout />
                        </div>
                    </form>
                </div>
            </div>

        </section >
    );
}

export default Profile