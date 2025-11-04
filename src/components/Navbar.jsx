// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Switch from '@mui/material/Switch';
// import { Link } from 'react-router-dom';

// function Navbar({ mode, setMode }) {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>CarSeller</Typography>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/about">About</Button>
//         <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
//         <Button color="inherit" component={Link} to="/admin">Admin</Button>
//         <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
//         <Button color="inherit" component={Link} to="/login">Login</Button>
//         <Switch checked={mode === "dark"} onChange={
//           () => setMode(mode === "light" ? "dark" : "light")
//         } />
//       </Toolbar>
//     </AppBar>
//   );
// }
// export default Navbar;

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';

function Navbar({ mode, setMode }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>CarHub</Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
        <Button color="inherit" component={Link} to="/admin">Admin</Button>
        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Switch checked={mode === "dark"} onChange={() => setMode(mode === "light" ? "dark" : "light")} />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
