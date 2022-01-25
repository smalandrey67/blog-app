export const formValidate = (values) => {
    const initialObject = {}
    const redex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    
    if(!values.email){
        initialObject.email = 'email is required'
    }else if(!redex.test(values.email)){
        initialObject.email = 'this is not valid email format' 
    }

    if(!values.password){
        initialObject.password = 'password is required'
    }

    return initialObject
}