import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { dataRef } from '../FirebaseConfig';
import GetLoggedUserInfo from '../reusable-hooks/GetLoggedUserInfo';

export default function EducationDetails() {
    let currentUserAuthData = GetLoggedUserInfo()[0]
    let retrievedInfo = GetLoggedUserInfo()[1]
    const { handleSubmit, control } = useForm({ values: retrievedInfo?.educationDetails });
    const [qualify, setQualify] = useState([
        {
            academic: "",
            course: "",
            year: ""
        }
    ]);

    const AddEducation = () => {
        setQualify([...qualify, { academic: "", course: "", year: "" }]);
    }

    const onSubmit = data => {
        console.log(data);
        let { uid } = currentUserAuthData
        dataRef.ref(`userInfo/${uid}`).update({
            educationDetails: data
        })
    }

    return (
        <div className="education-details">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title">
                    <h2>Education Details</h2>
                    <Button variant="outlined" onClick={AddEducation} type='button'>
                        Add
                    </Button>
                </div>
                {
                    qualify.map((index) => {
                        const fieldName = `education[${index}]`;
                        return (
                            <div key={index}>
                                <Controller
                                    name={`${fieldName}.academic`}
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'School/College Name is required',
                                        minLength: {
                                            value: 2,
                                            message: "Name must be atleast 2 Characters"
                                        }
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <TextField
                                            name={`${fieldName}.academic`}
                                            label="School/College Name"
                                            variant="outlined"
                                            value={value}
                                            sx={{ width: 1, mb: 2 }}
                                            onChange={onChange}
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                                <Controller
                                    name={`${fieldName}.course`}
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'course Name is required',
                                        minLength: {
                                            value: 2,
                                            message: "Name must be atleast 2 Characters"
                                        }
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (

                                        <TextField
                                            name={`${fieldName}.course`}
                                            label="Course Name"
                                            variant="outlined"
                                            value={value}
                                            sx={{ width: 1, mb: 2 }}
                                            onChange={onChange}
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                                <Controller
                                    name={`${fieldName}.year`}
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'year is required',
                                        minLength: {
                                            value: 4,
                                            message: "Correct year is required"
                                        }
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <TextField
                                            name={`${fieldName}.year`}
                                            label="Passed Year"
                                            variant="outlined"
                                            multiline
                                            maxRows={4}
                                            value={value}
                                            sx={{ width: 1, mb: 2 }}
                                            onChange={onChange}
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            </div>
                        )
                    })
                }

                <Button variant="outlined" type='submit'>
                    Save
                </Button>
            </form>
        </div>
    )
}
