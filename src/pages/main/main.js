//components
import CreatePost from '../../components/createPost/'
import Spinner from '../../components/spinner/spinner'

//styles
import  './main.scss'

const Main = ({posts}) => {

    if(posts.length === 0) return <Spinner />

    const showPosts = posts.map(({description, userName, time, file, id, photo}) => {
        return <CreatePost 
            description={description}
            userName={userName}
            time={time}
            file={file}
            key={id}
            photo={photo}
        />
    })

    return(
        <main className="main">
            {showPosts}
        </main>
    )
}

export default Main