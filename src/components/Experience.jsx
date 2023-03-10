import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect } from 'react';

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'


export default function Experience() {
    const { handleSubmit, control } = useForm();
    const { fields, append, } = useFieldArray({
        control,
        name: "experience",
    });

    const onSubmit = data => {
        console.log(data);
    }
    const addExp = () => {
        append({ role: "", startDate: "", endDate: "", companyName: "", description: "" })
    }
    let firstRender = 0
    useEffect(() => {
        if (firstRender < 1) {
            firstRender += 1;
            addExp()
        }
    }, [firstRender])

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
                        <Controller
                            name={`experience[${index}].startDate`}
                            control={control}
                            render={({ field }) =>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="StartDate" sx={{ width: 0.5, mb: 2, mr: 2 }} {...field} />
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
                        />
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
                    </div>
                ))}

                <Button variant="outlined" type='submit'>
                    Save
                </Button>
            </form>
        </div>
    )
}
