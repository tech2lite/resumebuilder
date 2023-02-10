import { Card, Container } from '@mui/material';
import { Button, Card, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { dataRef } from '../FirebaseConfig';
import EducationDetails from './EducationDetails';
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
                </Card>
            </Container>

        </>
    )
}
