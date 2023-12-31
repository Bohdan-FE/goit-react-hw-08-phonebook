import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/thunk';
import { IconButton } from '@mui/material';

function AuthNavigation() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        varian="h4"
        mx={'32px'}
        textAlign={'end'}
        sx={theme => ({
          fontSize: '20px',
          fontWeight: '600',
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        })}
      >{`Welcome ${user.name}!`}</Typography>
      <IconButton variant="outline" onClick={() => dispatch(logoutThunk())}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
}

export default AuthNavigation;
