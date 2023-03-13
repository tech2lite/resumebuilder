
import { Card, Container } from '@mui/material';


import EducationDetails from './EducationDetails';
import Navbar from './Navbar';
import PersonalInfo from './PersonalInfo';
import SkillDetails from './SkillDetails';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container sx={{ maxWidth: "60%" }} maxWidth={false}>
                <Card sx={{ p: 2, marginTop: 5 }}>
                    <PersonalInfo />
                    <EducationDetails />
                    <SkillDetails />
                </Card>
            </Container>

        </>
    )
}
