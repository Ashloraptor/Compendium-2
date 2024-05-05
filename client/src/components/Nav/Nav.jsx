import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import Auth from '../../utils/auth';
import Badge from '@mui/material/Badge';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Nav = ({}) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [BadgeEl, setAnchorAvatarEl] = React.useState(null);

  const BadgeOpen = Boolean(BadgeEl);

  const handleAvatarClick = (event) => {
    setAnchorAvatarEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorAvatarEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: green['#00c853'] }}>
      <AppBar position='static'>
        <Toolbar>
          {Auth.loggedIn() ? (
            <>
              <Badge
                onClick={handleAvatarClick}
                sx={{
                  m: 1,
                  bgcolor: 'white',
                  color: 'green',
                  cursor: 'pointer',
                }}
              >
                <LocalFloristIcon />
              </Badge>
              <Menu
                anchorEl={BadgeEl}
                id='account-menu'
                open={BadgeOpen}
                onClose={handleAvatarClose}
                onClick={handleAvatarClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={logout} component={Link} to='/'>
                  logout
                </MenuItem>
                <MenuItem component={Link} to='/profile'>
                  Profile
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to='/signup'
                sx={{
                  m: 1,
                  color: 'green',
                  bgcolor: 'white',
                  ':hover': {
                    bgcolor: 'green',
                    color: 'white',
                  },
                }}
              >
                Sign Up
              </Button>
              <Button
                component={Link}
                to='/login'
                sx={{
                  m: 1,
                  color: 'green',
                  bgcolor: 'white',
                  ':hover': {
                    bgcolor: 'green',
                    color: 'white',
                  },
                }}
              >
                Login In
              </Button>
            </>
          )}
          <Button
            component={Link}
            to='/search-plant'
            sx={{
              m: 1,
              color: 'green',
              bgcolor: 'white',
              ':hover': {
                bgcolor: 'green',
                color: 'white',
              },
            }}
          >
            Search Plant
          </Button>

          <Button
            component={Link}
            to='/ImageFinder'
            sx={{
              m: 1,
              color: 'green',
              bgcolor: 'white',
              ':hover': {
                bgcolor: 'green',
                color: 'white',
              },
            }}
          >
            Image Search
          </Button>
          <Button
            component={Link}
            to='/'
            sx={{
              m: 1,
              color: 'green',
              bgcolor: 'white',
              ':hover': {
                bgcolor: 'green',
                color: 'white',
              },
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;