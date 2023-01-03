import { AppBar, Container, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router'

export default function Navbar() {
    const navigate = useNavigate()
    const LogoutHandler = () => {
        sessionStorage.clear()
        navigate("/login")
    }
    return (
        <AppBar position="sticky" sx={{ p: 2 }}>
            <Container>
                <Box textAlign="right">
                    <Button variant="contained" onClick={LogoutHandler}>Logout</Button>
                </Box>
            </Container>
        </AppBar>
    )
}
