import { AppBar, Container, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

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
                    <Button variant="outlined" sx={{ marginRight: 1 }} LinkComponent={Link} to="/preview-resume"> Preview Resume</Button>
                    <Button variant="contained" onClick={LogoutHandler}>Logout</Button>
                </Box>
            </Container>
        </AppBar>
    )
}
