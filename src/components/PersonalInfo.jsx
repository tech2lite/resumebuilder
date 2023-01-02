import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from "react-hook-form";
import { dataRef } from '../FirebaseConfig';
import GetLoggedUserInfo from '../reusable-hooks/GetLoggedUserInfo';

export default function PersonalInfo() {
    let currentUserAuthData = GetLoggedUserInfo()[0]
    let retrievedInfo = GetLoggedUserInfo()[1]
    const { handleSubmit, control } = useForm({ values: retrievedInfo?.personalInfo });
    const onSubmit = data => {
        let { uid } = currentUserAuthData
        dataRef.ref(`userInfo/${uid}`).update({
            personalInfo: data
        })
    }
    return (
        <div className="personal-info">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Personal Information</h2>
                <Controller
                    name="fullname"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Full Name is required',
                        minLength: {
                            value: 2,
                            message: "Name must be atleast 2 Characters"
                        }
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (

                        <TextField
                            name='fullname'
                            label="Fullname"
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
                    name="address"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Address is required',
                        minLength: {
                            value: 20,
                            message: "Correct Address is required"
                        }
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            name='address'
                            label="Address"
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
                <Controller
                    name="mobileNumber"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Email required', pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            name='email'
                            label="Email"
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
                    name="mobilenumber"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Mobile Number is required',
                        minLength: {
                            value: 2,
                            message: "Number must be atleast 2 Characters"
                        }
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            type="number"
                            name='mobilenumber'
                            label="Mobile"
                            variant="outlined"
                            value={value}
                            sx={{ width: 1, mb: 2 }}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                />
                <Button variant="outlined" type='submit'>
                    Save
                </Button>
            </form>
        </div>
    )
}
