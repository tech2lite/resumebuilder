import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { dataRef } from '../FirebaseConfig';


export default function Home() {
    const navigate = useNavigate();
    const [userInfo, setuserInfo] = useState();
    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('userInfo'))) {
            setuserInfo(JSON.parse(sessionStorage.getItem('userInfo')));
        } else {
            navigate("/login")
        }
        let userInfoUuid = JSON.parse(sessionStorage.getItem('userInfo')).uid
        // To get user data
        dataRef.ref(`userInfo/${userInfoUuid}`).once('value').then(snapshot => {
            console.log(snapshot.val())
        });
        console.log(userInfo)
        // To update user datas
        dataRef.ref(`userInfo/${userInfoUuid}`).update({
            personalInfo: {
                name: 'Vinay'
            },
            educationQualification: {
                sslc: '70%'
            }
        })
    }, [navigate, userInfo])
    const LogoutHandler = () => {
        sessionStorage.clear()
        navigate("/login")
    }
    return (
        <>
            <Button variant="contained" onClick={LogoutHandler}>Logout</Button>
            <p>Personal Information Starts here</p>
        </>
    )
}
