// depencies
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const AuthenticationCheck = ({ children }) => {
    const location = useLocation()
    const { user } = useAuth()

    if(user === null){
        return <Navigate to='/registration' state={{from: location}} />
    }

    return children
}

export default AuthenticationCheck