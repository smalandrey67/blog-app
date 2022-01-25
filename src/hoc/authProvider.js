//depencies
import { useState } from 'react'; 
import { auth } from '../firebase';

//firebase
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { updateProfile } from "firebase/auth"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from '../firebase'


// context
import { AuthContext } from '../context/authContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    //current-user-method
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    
    //registration-method
    const registration = async (email, password, callback) => {
        await createUserWithEmailAndPassword(auth, email, password)
        callback();
    }
    //signin-method
    const signin = async (email, password, callback) => {
        await signInWithEmailAndPassword(auth, email, password)
        callback();
    }
    //signout-method
    const signout = async (callback) => {
        await signOut(auth) 
        callback();
    }
    //user-photo-method
    const uploadImage = async (file, currentUser, setLoading) => {
        const fileRef = ref(storage, currentUser.uid + '.png');
        setLoading(true);
        
        await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);


        updateProfile(currentUser, {photoURL});

        setLoading(false);
        alert("File was uploaded. Reload the page");
    }

    const value = {user, signin, signout, registration, uploadImage}
    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}  

export default AuthProvider;
