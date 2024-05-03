import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { green } from '@mui/material/colors';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const styles = {
  container: {
    pb:3,
  },
  textField:{
    width: '95%',
    my: 2,
    border: '1px solid grey',
  
  }
  }

export default function SignUp() {
  const [formState, setFormState] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
      if (data.addUser.token) {
        navigate('/profile');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <Container 
        component='main' 
        maxWidth='md'
        sx={styles.container}
        >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: green[500] }}>
            <LocalFloristIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up!
          </Typography>
          {error && (
            <Alert sx={{ mt: 2 }} variant='outlined' severity='error'>
              Signup Error!!
            </Alert>
          )}
         


          <Box
            component='form'
            noValidate
            onSubmit={handleFormSubmit}
            sx={{ mt: 3, minWidth: '280px' }}
          >
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={styles.textField}
                  onChange={handleChange}
                  value={formState.firstName}
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={styles.textField}
                  onChange={handleChange}
                  value={formState.lastName}
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={styles.textField}
                  onChange={handleChange}
                  value={formState.username}
                  required
                  fullWidth
                  id='username'
                  label='Username'
                  name='username'
                  

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={styles.textField}
                  onChange={handleChange}
                  value={formState.email}
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
               
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={styles.textField}
                  onChange={handleChange}
                  value={formState.password}
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                 


                />
              </Grid>
            </Grid>
            

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                mt: 3,
                mb: 2,
                color: 'white',
                ':hover': {
                  bgcolor: 'white',
                  color: 'green',
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
  );
}