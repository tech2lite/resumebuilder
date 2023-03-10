
import { Card, Container } from '@mui/material';


import EducationDetails from './EducationDetails';
import Experience from './Experience';
import Navbar from './Navbar';
import PersonalInfo from './PersonalInfo';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container sx={{ maxWidth: "60%" }} maxWidth={false}>
                <Card sx={{ p: 2, marginTop: 5 }}>
                    <PersonalInfo />
                    <EducationDetails />
                    <Experience />
                </Card>
            </Container>

        </>
    )
}
