//styles
import './spinner.scss'
import containerModule from '../../scssModule/container.module.scss'

const Spinner = () => {
    return(
        <div className="spinner">
            <div className={`spinner__container ${containerModule.container}`}>
                <div className="spinner__body">
                    <div className="loadingio-spinner-rolling-yc791tbznsf">
                        <div className="ldio-hedrvl77ai7">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner