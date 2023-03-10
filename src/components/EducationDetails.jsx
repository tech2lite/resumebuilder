import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useContext, useEffect } from 'react';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { dataRef } from '../FirebaseConfig';
import { ResumeContext } from './ResumeDataContext';
export default function EducationDetails() {
    let currentUserAuthData = GetLoggedUserInfo()[0]
    let retrievedInfo = GetLoggedUserInfo()[1]
    const { handleSubmit, register, control } = useForm({ values: retrievedInfo?.educationDetails });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "education",
    });

    useEffect(() => {
        retrievedInfo?.forEach((item) => {
            append(item)
        })
    }, [retrievedInfo])


    const onSubmit = data => {
        let { uid } = currentUserAuthData;
        dataRef.ref(`userInfo/${uid}`).update({
            education: data.education
        })
    }

    return (
        <div className="education-details">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title">
                    <h2>Education Details</h2>
                    <Button variant="outlined" onClick={() => append({ academic: "", course: "", year: "" })} type='button'>
                        Add
                    </Button>
                </div>
                {fields?.map((items, index) => {
                    return (
                        <div key={items.id}>
                            <Controller
                                name={`education[${index}].academic`}
                                control={control}
                                render={({ field }) => <TextField label="Academic" sx={{ width: 1, mb: 2 }} {...field} />}
                            />
                            <Controller
                                name={`education[${index}].course`}
                                control={control}
                                render={({ field }) => <TextField label="Course" sx={{ width: 1, mb: 2 }} {...field} />}
                            />
                            <Controller
                                name={`education[${index}].year`}
                                control={control}
                                render={({ field }) => <TextField label="Year" sx={{ width: 1, mb: 2 }} {...field} />}
                            />

                            <Button
                                type='button'
                                variant='contained'
                                color='error'
                                sx={{ mb: 2 }}
                                onClick={() => remove(index)}
                            >
                                Remove
                            </Button>
                        </div>
                    )
                })

                }
                <Button variant="outlined" type='submit'>
                    Save
                </Button>
            </form >
        </div >
    )
}
