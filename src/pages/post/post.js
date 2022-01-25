// depencies
import { useEffect, useRef } from 'react'

//theme-ui
/** @jsxImportSource theme-ui */

//styles
import './post.scss'
import inputStyle from '../../scssModule/input.module.scss'
import formStyle from '../../scssModule/form.module.scss'
import containerStyle from '../../scssModule/container.module.scss'
import buttonStyle from '../../scssModule/button.module.scss'
import warningStyle from '../../scssModule/warning.module.scss'
import titleStyle from '../../scssModule/title.module.scss'


const Post = ({
    handleSubmit, 
    setDescription, 
    progress,  
    description, 
    handleFile, 
    setUserName, 
    userName
}) => {

    //focus input
    const inputFocus = useRef(null)
    useEffect(() => {
        inputFocus.current.focus();
    }, [])

    const lengthOfTitle = userName.length >= 40 ? 
        <p style={{color: "red"}} className={`post__length ${warningStyle.warning}`}>maximum number of characters 40</p> : null;
    
    return(
        <section className="post">
            <div className={`post__container ${containerStyle.container}`}>
                <form className={`post__form ${formStyle.form}`} 
                    onSubmit={(e) => handleSubmit(e)}
                    sx={{backgroundColor: 'formBackground'}}
                >
               
                    <h2 className={`post__title ${titleStyle.title}`}>Create post</h2>

                    <div className="post__body">

                        <label className="post__label">
                            <p className="post__subtitle">Username:</p>
                            {lengthOfTitle}
                            <input 
                                className={`post__input ${inputStyle.input}`} 
                                type="text"
                                onChange={(e) => setUserName(e.target.value.toLocaleLowerCase())}
                                value={userName}
                                maxLength="40"
                                ref={inputFocus} 
                            />
                        </label>
                       
                        <label className="post__label">
                            <p className="post__subtitle">Description:</p>
                            <input 
                                className={`post__input ${inputStyle.input}`} 
                                type="text"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                autoComplete="off"
                            />
                        </label>

                        <label className={`post__label post__label-file ${buttonStyle.button}`}>
                            Add photo
                            <input 
                                className="post__input input post__input-file" 
                                type="file"
                                onChange={(e) => handleFile(e)}
                                name="file"
                                accept=".png,.jpg,.jpeg,.gif"
                            />
                            <span className="post__progress">{progress}%</span>     
                        </label>
                        <button className={`post__button ${buttonStyle.button}`} type="submit">Create Post</button>
                    </div>
                </form>
            </div>
        </section> 
    )
}

export default Post