import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, CircularProgress } from '@mui/material';
import { useLoginUserMutation } from './../api/userApi'; 
import Swal from 'sweetalert2';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        maxWidth: 400,
        margin: 'auto',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
        '& h3': {
            textAlign: 'center',
            color: '#333',
            marginBottom: '1.5rem',
            fontWeight: '500',
        },
    },
    field: {
        marginBottom: '1.2rem',
    },
    button: {
        padding: '0.9rem',
        borderRadius: '25px',
        backgroundColor: '#5C6BC0',
        color: '#fff',
        fontWeight: '600',
        '&:hover': {
            backgroundColor: '#3f51b5',
        },
    },
    errorMessage: {
        color: '#f44336',
        fontSize: '0.875rem',
        paddingTop: '0.5rem',
    },
    textField: {
        '& .MuiInputBase-root': {
            borderRadius: '8px',
            border: '1px solid #ddd',
            transition: 'border 0.3s ease',
        },
        '& .MuiInputBase-root:hover': {
            border: '1px solid #5C6BC0',
        },
    },
    grid: {
        marginBottom: '1rem',
    },
}));

const studentLoginValidationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function StudentLogin() {
    const classes = useStyles();
    const [loginUser, { isLoading }] = useLoginUserMutation(); 

    const handleSubmit = async (values) => {
        try {
            const response = await loginUser({ ...values, role: 'student' }).unwrap();

            Swal.fire({
                title: 'Success!',
                text: 'Logged in successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
            });

        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Error logging in! Please check your credentials.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className={classes.formContainer}>
            <h3>Student Login</h3>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={studentLoginValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ touched, errors }) => (
                    <Form>
                        <Grid container spacing={2} className={classes.grid}>
                            <Grid item xs={12}>
                                <Field
                                    name="username"
                                    as={TextField}
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    helperText={<ErrorMessage name="username" />}
                                    error={touched.username && Boolean(errors.username)}
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="password"
                                    as={TextField}
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    helperText={<ErrorMessage name="password" />}
                                    error={touched.password && Boolean(errors.password)}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                    disabled={isLoading}
                                    className={classes.button}
                                >
                                    {isLoading ? <CircularProgress size={24} /> : 'Login'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default StudentLogin;
