import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useContext } from 'react';
import { dataRef } from '../FirebaseConfig';
import { ResumeContext } from './ResumeDataContext';

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'


export default function Experience() {
    const expInfo = useContext(ResumeContext)
    let currentUserAuthData = expInfo.currentUserAuthData
    let retrievedInfo = expInfo?.workInformation ? JSON.parse(expInfo?.workInformation) : []

    const { handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "experience",
    });

    const onSubmit = data => {
        console.log(data);
        let { uid } = currentUserAuthData;
        console.log(uid);
        dataRef.ref(`userInfo/${uid}`).update({
            experience: JSON.stringify(data.experience)
        })
    }
    const addExp = () => {
        append({ role: "", startDate: "", endDate: "", companyName: "", description: "" })
    }

    useEffect(() => {
        retrievedInfo?.forEach((item) => {
            console.log(item);
            // append(item);
        })
    }, [retrievedInfo])

    return (
        <div className="experience">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title">
                    <h2>Experience</h2>
                    <Button
                        variant="outlined"
                        type='button'
                        onClick={addExp}
                    >
                        Add
                    </Button>
                </div>
                {fields.map(({ id }, index) => (
                    <div key={id}>
                        <Controller
                            name={`experience[${index}].role`}
                            control={control}
                            render={({ field }) => <TextField label="Role" sx={{ width: 1, mb: 2 }} {...field} />}
                        />
                        <Controller
                            name={`experience[${index}].companyName`}
                            control={control}
                            render={({ field }) => <TextField label="Company Name" sx={{ width: 1, mb: 2 }} {...field} />}
                        />
                        {/* <Controller
                            name={`experience[${index}].startDate`}
                            control={control}
                            render={({ field: { onChange, value } }) =>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        format="MM-DD-YYYY"
                                        label="StartDate"
                                        sx={{ width: 0.5, mb: 2, mr: 2 }}
                                        value={value}
                                        onChange={onChange}
                                    // {...field}
                                    />
                                </LocalizationProvider>
                            }
                        />

                        <Controller
                            name={`experience[${index}].endDate`}
                            control={control}
                            render={({ field }) =>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="EndDate" sx={{ width: 0.484, mb: 2 }} {...field} />
                                </LocalizationProvider>
                            }
                        /> */}
                        <Controller
                            name={`experience[${index}].description`}
                            control={control}
                            render={({ field }) =>
                                <ReactQuill
                                    theme='snow'
                                    placeholder="Write something..."
                                    className="textEditor"
                                    {...field}
                                />
                            }
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
                ))}

                <Button variant="outlined" type='submit'>
                    Save
                </Button>
            </form>
        </div>
    )
}
