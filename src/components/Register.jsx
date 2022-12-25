import app from '../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, Container, Typography } from '@mui/material';
import { CircularProgress, Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const authentication = getAuth(app);
    const [registerField, setregisterField] = useState([])
    const HandleRegisterChange = (e) => {
        setregisterField({
            ...registerField,
            [e.target.name]: e.target.value
        })
    }
    const HandleRegistration = (e) => {
        e.preventDefault()
        const { email, password, confirmpassword } = registerField
        createUserWithEmailAndPassword(authentication, email, password).then(userCredentials => {
            const user = userCredentials.user
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="register centered-form">
            <Container>
                <Card variant='outlined' sx={{ width: 400, mx: "auto", padding: 4 }}>
                    <Typography variant="h4" component="h4" align='center' sx={{ mb: 3 }}>
                        Register
                    </Typography>
                    <form onSubmit={HandleRegistration}>
                        <TextField name='email' label="Email" variant="outlined" sx={{ width: 1, mb: 2 }}
                            required onChange={HandleRegisterChange} />
                        <TextField name='password' type="password" label="Password" variant="outlined" sx={{ width: 1, mb: 2 }} required onChange={HandleRegisterChange} />
                        <TextField name='confirmpassword' type="password" label="Confirm Password" variant="outlined" sx={{ width: 1, mb: 4 }} required onChange={HandleRegisterChange} />
                        <Button variant="outlined" type='submit'>
                            {/* <CircularProgress size={14} /> */}
                            Register
                        </Button>
                    </form>
                    <Typography variant="p" component="p" sx={{ mt: 3 }}>
                        Already have an account? <Link to='/login'>Click Here</Link>
                    </Typography>
                </Card>
            </Container>
        </div>
    )
}
