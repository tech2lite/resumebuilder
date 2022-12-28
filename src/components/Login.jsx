import React, { useEffect, useState } from 'react';
import { Container, Button, TextField, Card, Typography } from '@mui/material';
import { app } from '../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const authentication = getAuth(app);
  const [loginField, setloginField] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('userInfo'))) {
      navigate("/")
    }
  }, [navigate])

  const handleLoginChange = (e) => {
    setloginField({
      ...loginField,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginField
    signInWithEmailAndPassword(authentication, email, password).then(userCredentials => {
      const user = userCredentials.user
      navigate("/home")
      sessionStorage.setItem("userInfo", JSON.stringify(user))
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="login centered-form">
      <Container>
        <Card variant='outlined' sx={{ width: 400, mx: "auto", padding: 4 }}>
          <Typography variant="h4" component="h4" align='center' sx={{ mb: 3 }}>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField name='email' label="Email" variant="outlined" sx={{ width: 1, mb: 2 }}
              required onChange={handleLoginChange} />
            <TextField name='password' type="password" label="Password" variant="outlined" sx={{ width: 1, mb: 2 }} required onChange={handleLoginChange} />
            <Button variant="outlined" type='submit'>
              {/* <CircularProgress size={14} /> */}
              Login
            </Button>
          </form>
          <Typography variant="p" component="p" sx={{ mt: 3 }}>
            Don't have an account? <Link to='/register'>Click Here</Link>
          </Typography>
        </Card>
      </Container>
    </div>
  );
}
