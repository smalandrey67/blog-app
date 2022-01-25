// depensies
import { Link } from 'react-router-dom'
import { useContext,  useEffect, useState} from 'react'

//context
import { AuthContext } from '../../context/authContext'

//theme-ui
/** @jsxImportSource theme-ui */

//styles
import './navigation.scss'
import avatarStyle from '../../scssModule/avatar.module.scss'

const Navigation = ({ photoURL, setPhotoURL }) => {
    const [activeBurger, setActiveBurger] = useState(false)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const uloadPhotoURL = () => {
            if(!user?.photoURL) return

            setPhotoURL(user.photoURL)
        }
        uloadPhotoURL()
    }, [user, setPhotoURL])

    //check if the user is logged in
    const haveUser = user ? (
        <div className="header__user">
            <img className={`header__user-profile ${avatarStyle.avatar}`} src={photoURL} alt="user" />
        </div>
    ) : null;


    const handleBurger = () => {
        setActiveBurger(prev => !prev)
    }
    const handleItem = () => {
        setActiveBurger(prev => !prev)
    } 

    const classNavActive = activeBurger ? 'nav__active' : ''
    const classBurgerActive = activeBurger ? 'header__burger-active' : ''

    return(
        <div className="header__right">
        <div onClick={handleBurger} className={`header__burger ${classBurgerActive}`}>
            <span className="header__burger-span"></span>
        </div>
        <div className="header__functionality">
            <nav 
                className={`header__nav nav ${classNavActive}`}
                sx={{backgroundColor: 'navBackground'}}
            >
                <ul className="nav__list">
                    <li className="nav__item" onClick={handleItem}>
                        <Link to="/" className="nav__link">
                            Posts
                        </Link>
                    </li>
                    <li className="nav__item" onClick={handleItem}>
                        <Link to="post" className="nav__link">
                            Add Post
                        </Link>
                    </li>
                    <li className="nav__item" onClick={handleItem}>
                        <Link to="profile" className="nav__link">
                            Profile
                        </Link>
                    </li>
                </ul>
            </nav>
            {haveUser}
        </div>
        </div>
    )
}

export default Navigation 