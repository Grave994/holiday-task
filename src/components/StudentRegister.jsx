import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid } from '@mui/material';
import { useRegisterUserMutation } from './../api/userApi';
import Swal from 'sweetalert2';
import { makeStyles } from '@mui/styles'; 
//Student Register
const useStyles = makeStyles((theme) => ({
  formContainer: {
    maxWidth: 600,
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

const studentValidationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  major: Yup.string().required('Major is required'),
  profileImage: Yup.string().url('Invalid image URL').required('Profile image is required'),
});

function StudentRegister() {
  const classes = useStyles();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const userData = {
        ...values,
        grades: [], 
      };

      await registerUser(userData).unwrap();
      resetForm();

      Swal.fire({
        title: 'Success!',
        text: 'User registered successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Error registering user!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className={classes.formContainer}>
      <h3>Student Registration</h3>
      <Formik
        initialValues={{
          fullName: '',
          username: '',
          email: '',
          password: '',
          major: '',
          profileImage: '',
        }}
        validationSchema={studentValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={12}>
                <Field
                  name="fullName"
                  as={TextField}
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  helperText={<ErrorMessage name="fullName" />}
                  error={touched.fullName && Boolean(errors.fullName)}
                  className={classes.textField}
                />
              </Grid>
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
                  name="email"
                  as={TextField}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  helperText={<ErrorMessage name="email" />}
                  error={touched.email && Boolean(errors.email)}
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
                <Field
                  name="major"
                  as={TextField}
                  label="Major"
                  variant="outlined"
                  fullWidth
                  helperText={<ErrorMessage name="major" />}
                  error={touched.major && Boolean(errors.major)}
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="profileImage"
                  as={TextField}
                  label="Profile Image URL"
                  variant="outlined"
                  fullWidth
                  helperText={<ErrorMessage name="profileImage" />}
                  error={touched.profileImage && Boolean(errors.profileImage)}
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
                  {isLoading ? 'Registering...' : 'Register'}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default StudentRegister;
