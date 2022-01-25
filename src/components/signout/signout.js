// depencies
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'

//styles
import './signout.scss'
import buttonStyle from '../../scssModule/button.module.scss'

const Signout = () => {
    const navigate = useNavigate()
    const { signout } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        signout(() => navigate('/registration', {replace: true}))
    }

    return <button className={`signout__button ${buttonStyle.button}`} onClick={handleSubmit}>Sign out</button>
}
export default Signout