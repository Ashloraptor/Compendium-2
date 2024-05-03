import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
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
import { blue } from '@mui/material/colors';



const styles = {
  textField:{
    width: '95%',
    my: 2,
    border: '1px solid grey'
  }
}



export default function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      if (data.login.token) navigate('/ImageFinder');
    } catch (e) {
      console.error(e);
    }

  };

  return (
  
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
            <LocalFloristIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Log in
          </Typography>
          {error && (
            <Alert sx={{ mt: 2 }} variant='outlined' severity='error'>
              Login error
            </Alert>
          )}
          <Box
            component='form'
            noValidate
            onSubmit={handleFormSubmit}
            sx={{ mt: 4, minWidth: '280px' }}
          >
            <Grid container spacing={3}>
              <Grid item xs={15}>
                <TextField
                  sx={styles.textField}
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={formState.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={styles.textField}
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={formState.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                mt: 2,
                mb: 1,
                color: 'white',
                ':hover': {
                  bgcolor: 'white',
                  color: 'green',
                },
              }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
   
  );
}
