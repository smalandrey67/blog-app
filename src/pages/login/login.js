// depencies
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'

// components
import FormStructure from '../../components/formStructure'

//utils
import { formValidate } from '../../utils/formValidate'


const Login = () => {
    const initialValues = {email: '', password: ''}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const { signin } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormErrors(formValidate(formValues))
        
        if(formValues.email === '' || formValues.password === '') return

        signin(
            formValues.email.trim().toLowerCase(),
            formValues.password.trim().toLowerCase(), 
            () => navigate('/', {replace: true})
        ).catch(error => setError(error.code)) 
    }
  
    const handleChange = (e) => {
        const {name, value} = e.target

        setFormValues({...formValues, [name]: value})
    }

    return(
        <FormStructure 
            formType='Log in'
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formErrors={formErrors}
            hasNotAccount={true}
            error={error}
        />
    )
}

export default Login