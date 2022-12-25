import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function Home() {
    const navigate = useNavigate();
    const [userInfo, setuserInfo] = useState();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('userInfo'))) {
            setuserInfo(JSON.parse(localStorage.getItem('userInfo')));
        } else {
            navigate("/login")
        }
    }, [])

    return (
        <div>{userInfo && userInfo.email}</div>
    )
}
