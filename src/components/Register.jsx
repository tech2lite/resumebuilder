import app from '../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
export default function Register() {
    const authentication = getAuth(app);
    const HandleRegistration = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(authentication, 'jk@gmail.com', 'Welc0me@123$#').then(userCredentials => {
            const user = userCredentials.user
            console.log(user)
        })
    }
    return (
        <form onSubmit={HandleRegistration}>
            <button type='submit'>Submit</button>
        </form>
    )
}
