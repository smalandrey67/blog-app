// depensies
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

//firebase
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { storage, db } from "./firebase"
import { onSnapshot, addDoc, collection} from 'firebase/firestore'

//hoc
import AuthProvider from './hoc/authProvider'
import AuthenticationCheck from './hoc/authenticationCheck'
import CatchError from './hoc/catchError'

//pages
import Main from './pages/main'
import Post from './pages/post'
import Registration from './pages/registration'
import Login from './pages/login'
import Profile from './pages/profile'

//components
import Header from './components/header'
import Error from './components/error'

//utils
import { makeTime } from './utils/makeTime'

// theme-ui
/** @jsxImportSource theme-ui */


const Home = () => {
  //states
  const [userName, setUserName] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')
  const [progress, setProgress] = useState(0);
  const [posts, setPosts] = useState([])
  const [photoURL, setPhotoURL] = useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');
  const [term, setTerm] = useState('')
  
 
  const navigate = useNavigate()
  const usersCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const uploadData = () => { 
      //get data in real time from firebase/database
      onSnapshot(usersCollectionRef, (snapshot) => {
          const values = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
          
          setPosts(values)
      })
    }
    uploadData()
  }, [])

  
  const handleFile = (e) => {
    const files = e.target.files[0]
    const sotrageRef = ref(storage, `files/${files.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, files);

    //upload image to firebase/store
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgress(prog)

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFile(downloadURL)
        })
      },
      (error) => console.log(error),
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(description === '' || userName === '') {
      alert('Each field is requier')
      return
    }

    if(progress !== 100){
      alert('Wait until the download reaches 100%')
      return
    }

    const dataPost = {
      description: description.trim(),
      userName: userName.trim(),
      file: file.trim(),
      time: makeTime(),
      photo: photoURL
    }

    //add data to firebase/database
    await addDoc(usersCollectionRef, dataPost)
    
    //will be navigated to main page after you create a post
    navigate('/')

    //reset form fields
    setUserName('')
    setProgress(0)
    setFile('')
    setDescription('')
  }

  //search post by username
  const onSearch = (items, string) => {
    if(string.length === 0) return items

    return items.filter(item => item.userName.indexOf(string.toLowerCase()) > -1); 
  }
  const visibleItems = onSearch(posts, term)

  return(
    <CatchError>
      <AuthProvider>
        <Header 
          photoURL={photoURL}
          setPhotoURL={setPhotoURL}
          setTerm={setTerm}
        /> 
          <Routes>
            <Route path='/' element={
              //user login verification
              <AuthenticationCheck>
                <Main 
                  posts={visibleItems}
                />
              </AuthenticationCheck>
            }/>

            <Route path='post' element={
              //user login verification
              <AuthenticationCheck>
                <Post 
                  handleSubmit={handleSubmit}
                  setFile={setFile}
                  setDescription={setDescription}
                  progress={progress}
                  handleFile={handleFile}
                  description={description}
                  setUserName={setUserName}
                  userName={userName}
                />
              </AuthenticationCheck>
            }/>

            <Route path='registration' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route path='profile' element={
              //profile-settings
              //user login verification
              <AuthenticationCheck>
                <Profile 
                  setPhotoURL={setPhotoURL} 
                  photoURL={photoURL}
                />
              </AuthenticationCheck>
            }/>
            <Route path='*' element={<Error titleError="sorry but we could not find that page"/>} />
          </Routes>
      </AuthProvider> 
    </CatchError>
  )
}

export default Home