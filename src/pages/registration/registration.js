// depencies
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'

//components
import FormStructure from '../../components/formStructure'

//utils
import { formValidate } from '../../utils/formValidate'

const Registration = () => {
    const initialValues = {email: '', password: ''}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [error, setError] = useState('')
    
   
    
    const navigate = useNavigate()
    const { registration } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setFormErrors(formValidate(formValues))
        if(formValues.email === '' || formValues.password === '') return
        
        registration(
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
            formType="Registration"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formErrors={formErrors}
            hasAccount={true}
            error={error}
        /> 
    )
}

export default Registration