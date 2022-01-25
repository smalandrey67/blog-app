// depencies
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

//theme-ui
/** @jsxImportSource theme-ui */

//styles
import './formStructure.scss'
import inputStyle from '../../scssModule/input.module.scss'
import formStyle from '../../scssModule/form.module.scss'
import buttonStyle from '../../scssModule/button.module.scss'
import titleStyle from '../../scssModule/title.module.scss'
import warningStyle from '../../scssModule/warning.module.scss'

const FormStructure = ({
    formType, 
    handleSubmit, 
    hasAccount=false,
    hasNotAccount=false,
    handleChange,
    formErrors,
    error
}) => {

    //focus input
    const inputFocus = useRef(null)
    useEffect(() => {
        inputFocus.current.focus();
    }, [])

    const alreadyHacAccount = hasAccount ? <Link to='/login' className="form__user-link">Already have an account</Link> : null
    const hasNotAccountYet = hasNotAccount ? <Link to='/registration' className="form__user-link">Registration</Link> : null

    return(
        <div id="popup" className="popup">
            <div className="popup__body">
                <form 
                    className={`form__user  ${formStyle.form}`} 
                    onSubmit={(e) => handleSubmit(e)}
                    sx={{backgroundColor: 'formBackground'}}
                >
                    <h1 className={`form__user-title ${titleStyle.title}`}>{formType}</h1>
                    <p className={`form__user-error ${warningStyle.warning}`}>{error}</p>
                    <div className="form__user-body">
                        <label className="form__user-label">
                            <p className={`form__user-warning ${warningStyle.warning}`}>{formErrors?.email}</p>
                            <input 
                                className={`form__user-input ${inputStyle.input}`} 
                                type="email" 
                                onChange={(e) => handleChange(e)}
                                name="email"
                                placeholder="email"
                                ref={inputFocus}
                                autoComplete="off"
                            />
                        </label>

                        <label className="form__user-label">
                            <p className={`form__user-warning ${warningStyle.warning}`}>{formErrors?.password}</p>
                            <input 
                                className={`form__user-input ${inputStyle.input}`} 
                                type="password"
                                onChange={(e) => handleChange(e)}
                                name="password"
                                placeholder="password"
                                autoComplete="off"
                            />
                        </label>
                        {hasNotAccountYet}
                        {alreadyHacAccount}
                    </div>
                    <button className={`form__user-button ${buttonStyle.button}`} type="submit">{formType}</button>
                </form>
            </div>
        </div>
    )
}

export default FormStructure