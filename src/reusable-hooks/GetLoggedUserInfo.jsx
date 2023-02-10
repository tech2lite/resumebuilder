import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { dataRef } from '../FirebaseConfig';
export default function GetLoggedUserInfo() {
    const navigate = useNavigate();
    const [userInfo, setuserInfo] = useState();
    const [retrieveInfo, setretrieveInfo] = useState()
    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('userInfo'))) {
            setuserInfo(JSON.parse(sessionStorage.getItem('userInfo')));
        } else {
            navigate("/login")
        }
        // For getting Data
        let userInfoUuid = JSON.parse(sessionStorage.getItem('userInfo')).uid
        dataRef.ref(`userInfo/${userInfoUuid}`).once('value').then(snapshot => {
            setretrieveInfo(snapshot.val())
        });
    }, [])
    return { userInfo, retrieveInfo }
}
