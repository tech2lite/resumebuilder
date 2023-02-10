import { Card, Container } from '@mui/material';
import Navbar from './Navbar';
import PersonalInfo from './PersonalInfo';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container sx={{ maxWidth: "60%" }} maxWidth={false}>
                <Card sx={{ p: 2, marginTop: 5 }}>
                    <PersonalInfo />
                </Card>
            </Container>

        </>
    )
}
