//theme
/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui'



//components
import Navigation from '../navigation/'
import SearchPanel from '../searchPanel'

//styles
import './header.scss'
import containerStyle from '../../scssModule/container.module.scss'


const Header = ({photoURL, setPhotoURL, setTerm}) => {
    const [colorMode, setColorMode] = useColorMode()

    const iconTheme = colorMode === 'light' ? <i className="far fa-sun header__theme-icon"></i> : <i className="fas fa-moon header__theme-icon"></i>
    
    return(
        <header className="header" sx={{backgroundColor: 'headerBackground'}}>
            <div className={`header__container ${containerStyle.container}`}>
                <div className="header__top">
                    <h1 className="header__logo">Blog App</h1>
                    <div className="header__theme">
                        <input
                            type="checkbox" 
                            onChange={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
                            className="header__theme-checkbox"
                            name="theme"
                        />
                        {iconTheme}
                    </div>
                </div>

                <div className="header__body">
                    <SearchPanel setTerm={setTerm}/>
                    
                    <Navigation 
                        photoURL={photoURL}
                        setPhotoURL={setPhotoURL}
                    />
                </div>

            </div>
        </header>
    )
}

export default Header