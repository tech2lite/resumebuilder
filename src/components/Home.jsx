import { Button, Card, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { dataRef } from '../FirebaseConfig';
import Navbar from './Navbar';
import PersonalInfo from './PersonalInfo';

export default function Home() {
    // const navigate = useNavigate();
    // const [userInfo, setuserInfo] = useState();
    // useEffect(() => {
    //     if (JSON.parse(sessionStorage.getItem('userInfo'))) {
    //         setuserInfo(JSON.parse(sessionStorage.getItem('userInfo')));
    //     } else {
    //         navigate("/login")
    //     }
    //     let userInfoUuid = JSON.parse(sessionStorage.getItem('userInfo')).uid
    //     // To get user data
    //     dataRef.ref(`userInfo/${userInfoUuid}`).once('value').then(snapshot => {
    //         console.log(snapshot.val())
    //     });
    //     console.log(userInfo)
    //     // To update user datas
    //     dataRef.ref(`userInfo/${userInfoUuid}`).update({
    //         personalInfo: {
    //             name: 'Vinay'
    //         },
    //         educationQualification: {
    //             sslc: '70%'
    //         }
    //     })
    // }, [])

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
