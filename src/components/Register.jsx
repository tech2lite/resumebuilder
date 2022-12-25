import app from '../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Card, Container, Typography } from '@mui/material';
import { CircularProgress, Button } from '@mui/material';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";

export default function Register() {
    const authentication = getAuth(app);
    const navigate = useNavigate();
    const { handleSubmit, control, getValues } = useForm();
    const [registrationStatus, setRegistrationStatus] = useState({
        loading: false,
        submission: null
    })
    const registrationRef = useRef(null)
    const onSubmit = data => {
        // setRegistrationStatus(true)
        setRegistrationStatus({
            loading: true,
            submission: null
        })
        const { email, password } = data
        createUserWithEmailAndPassword(authentication, email, password).then(_userCredentials => {
            setRegistrationStatus({
                loading: false,
                submission: true
            })
            setTimeout(() => {
                navigate("/login");
            }, 3000)
        }).catch(_err => {
            setRegistrationStatus({
                loading: false,
                submission: false
            })
        })
        registrationRef.current.reset()
    };
    return (
        <div className="register centered-form">
            <Container>
                <Card variant='outlined' sx={{ width: 400, mx: "auto", padding: 4 }}>

                    <Typography variant="h4" component="h4" align='center' sx={{ mb: 3 }}>
                        Register
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} ref={registrationRef}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Email required', pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    name='email'
                                    label="Email"
                                    variant="outlined"
                                    value={value}
                                    sx={{ width: 1, mb: 2 }}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Password must be entered',
                                minLength: {
                                    value: 6,
                                    message: "Password must have at least 6 characters"
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    type='password'
                                    name='password'
                                    label="Password"
                                    variant="outlined"
                                    value={value}
                                    sx={{ width: 1, mb: 2 }}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}

                                />
                            )}
                        />
                        <Controller
                            name="confirmpassword"
                            control={control}
                            defaultValue=""
                            rules={{ validate: value => (value === getValues().password || 'Password does not match') }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    type='password'
                                    name='confirmpassword'
                                    label="Confirm Password"
                                    variant="outlined"
                                    value={value}
                                    sx={{ width: 1, mb: 2 }}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                        <Button variant="outlined" type='submit'>
                            {registrationStatus.loading ? <CircularProgress size={14} /> : 'Register'}
                            {/* <CircularProgress size={14} /> */}

                        </Button>
                    </form>
                    <Typography variant="p" component="p" sx={{ mt: 3 }}>
                        Already have an account? <Link to='/login'>Click Here</Link>
                    </Typography>
                </Card>
            </Container>
            {registrationStatus.submission ? <Alert severity="success" className='badge-status'>Successfully created your account. We're redirecting you to the login page shortly!</Alert> : registrationStatus.submission === false ? <Alert severity="error" className='badge-status'>This account already exists! Kindly Login</Alert> : ''}

        </div >
    )
}
