// depencies
import { useState } from 'react'

//theme-ui
/** @jsxImportSource theme-ui */

//styles
import './createPost.scss'
import avatarStyle from '../../scssModule/avatar.module.scss'
import containerStyle from '../../scssModule/container.module.scss'

//utils
import { checkLength } from '../../utils/stringValidate'

const CreatePost = ({description, time, file, userName,  photo}) => {
    const [more, setMore] = useState(false)
   
    const buttonMore =  description.length >= 25 ? 
    <button className="create__more" onClick={() => setMore((prev) => !prev)}>{more ? 'hide' : 'more'}</button> : null;

    return(
        <article className="create">
            <div className={`create__container ${containerStyle.container}`}>
                <div className="create__body">

                    <div className="create__user">
                        <span className="create__user-photo">
                            <img className={`create__user-image ${avatarStyle.avatar}`} src={photo} alt="user" />
                        </span>
                    
                        <h2 
                            className="create__user-title" 
                            sx={{color: 'colorTitle'}}>
                            {userName}
                        </h2>
                    </div>

                    <div className="create__main">
                        <img className="create__main-image" src={file} alt='post' />
                    </div>

                    <div className="create__information">
                        <p className="create__time">{time}</p>
                        <div className="create__description">
                            {more ? description : `${checkLength(description)}`}
                            {buttonMore}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default CreatePost