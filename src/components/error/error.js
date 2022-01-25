//styles
import './error.scss'
import containerStyle from '../../scssModule/container.module.scss'

import notFoundIcon from '../../assets/error-image.png'

const Error = ({ titleError }) => {
    return(
        <div className="error">
            <div className={`error__container ${containerStyle.container}`}>
                <img className="error__image" src={notFoundIcon} alt="error" />
                <h1 className="error__title">{titleError}</h1>
            </div>
        </div>
    )
}
export default Error