import { Button } from '@mui/material';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useEffect, useContext } from 'react';
import { dataRef } from '../FirebaseConfig';
import { ResumeContext } from './ResumeDataContext';

export default function OtherDetails() {

    const otherInfo = useContext(ResumeContext)
    let currentUserAuthData = otherInfo.currentUserAuthData
    let retrievedInfo = otherInfo?.otherInformation

    const { handleSubmit, control } = useForm({ values: retrievedInfo });


    const onSubmit = data => {
        let { uid } = currentUserAuthData;
        dataRef.ref(`userInfo/${uid}`).update({
            otherDetails: data
        })
    }


    return (
        <div className='otherDetails'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Other Details</h2>
                <Controller
                    name={`objective`}
                    control={control}
                    defaultValue=""
                    render={({ field }) =>
                        <TextField
                            label="Career Objective"
                            multiline
                            rows={7}
                            sx={{ width: 1, mb: 2 }}
                            {...field}
                        />}
                />

                <Controller
                    name={`declaration`}
                    defaultValue=""
                    control={control}
                    render={({ field }) =>
                        <TextField
                            label="Declaration"
                            multiline
                            rows={5}
                            sx={{ width: 1, mb: 2 }}
                            {...field}
                        />}
                />

                <Button variant="outlined" type='submit'>
                    Save
                </Button>
            </form>
        </div>
    )
}
