import { createContext } from "react";
import GetLoggedUserInfo from '../reusable-hooks/GetLoggedUserInfo';
export const ResumeContext = createContext()

export const ResumeContextProvider = ({ children }) => {
    let retrievedInfo = GetLoggedUserInfo().retrieveInfo
    let currentUserAuthData = GetLoggedUserInfo().userInfo

    let constructiveData = {
        currentUserAuthData,
        personalInformation: retrievedInfo?.personalInfo,
        educationInformation: retrievedInfo?.education,
        workInformation: retrievedInfo?.experience,
        skillsetsInformation: retrievedInfo?.skillSet,
        otherInformation: retrievedInfo?.otherDetails,
    }

    return (
        <ResumeContext.Provider value={constructiveData}>
            {children}
        </ResumeContext.Provider>
    )
}