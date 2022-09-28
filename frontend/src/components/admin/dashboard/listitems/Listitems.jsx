import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

// import AssignmentIcon from '@mui/icons-material/Assignment';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
      darker: '#fafafa',
    },
  },
});

export const mainListItems = (
  <React.Fragment>
    <ThemeProvider theme={theme}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Dashboard" sx={{color:"white"}} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Orders" sx={{color:"white"}} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Customers" sx={{color:"white"}} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Reports" sx={{color:"white"}} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Integrations" sx={{color:"white"}} />
    </ListItemButton>
    </ThemeProvider>
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );