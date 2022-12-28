import React, { useEffect, useRef, useState } from 'react';
import { Container, Button, TextField, Card, Typography, CircularProgress, Alert } from '@mui/material';
import { app } from '../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

export default function Login() {
  const authentication = getAuth(app);
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState({
    loading: false,
    submission: null
  })

  const { handleSubmit, control } = useForm();
  const loginRef = useRef(null)

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('userInfo'))) {
      navigate("/")
    }
  }, [navigate])

  const handleLogin = (data) => {
    setLoginStatus({
      loading: true,
      submission: null
    })
    const { email, password } = data;

    signInWithEmailAndPassword(authentication, email, password).then(userCredentials => {
      const user = userCredentials.user;
      sessionStorage.setItem("userInfo", JSON.stringify(user));
      setLoginStatus({
        loading: false,
        submission: true
      });
      navigate("/home");
    }).catch(err => {
      console.log(err)
      setLoginStatus({
        loading: false,
        submission: false
      })
    })

    loginRef.current.reset()
  }

  return (
    <div className="login centered-form">
      <Container>
        <Card variant='outlined' sx={{ width: 400, mx: "auto", padding: 4 }}>
          <Typography variant="h4" component="h4" align='center' sx={{ mb: 3 }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(handleLogin)} ref={loginRef}>
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

            <Button variant="outlined" type='submit'>
              {loginStatus.loading ? <CircularProgress size={14} /> : 'Login'}
            </Button>
          </form>
          <Typography variant="p" component="p" sx={{ mt: 3 }}>
            Don't have an account? <Link to='/register'>Click Here</Link>
          </Typography>
        </Card>
      </Container>
      {loginStatus.submission === false ? <Alert severity="error" className='badge-status'>Incorrect Email or Password</Alert> : ''}

    </div>
  );
}
