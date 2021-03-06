import {Badge, Container, 
    CssBaseline, Divider, Drawer, 
    IconButton, makeStyles, Toolbar
} from '@material-ui/core'
import React from 'react';
import clsx from 'clsx';
import { Route,Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import Copyright from '../component/Copyright';
import { MainListItems,SecondaryListItems } from '../component/ListItems';
import DashboardPage from "../component/Dashboard";
import StockList from "../component/StockList";
import ProductList from "../component/ProductList";

// const switchRoutes = (
//     <Switch>
//       {/* <Route exact path="/stocks/:id" component={EditStock} /> */}
//       {routes.map((prop, key) => {
//           console.log(prop.path);
//           return (
//             <Route
//               exact
//               path={prop.path}
//               component={prop.component}
//               key={key}
//             />
//           );
//       })}
//       {/* <Redirect from="/" to="/dashboard" /> */}
//     </Switch>
//   );


  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));
  
  const Home:React.FC=()=>  {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    //const location = useLocation();
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              UBS Dealer Portal
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <MainListItems></MainListItems>
          <Divider />
          <SecondaryListItems></SecondaryListItems>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
                <Route exact path="/">
                    <DashboardPage />
                </Route>
                <Route path="/stocks">
                    <StockList />
                </Route>
                <Route path="/apps">
                    <ProductList />
                </Route>
                {/* <Redirect from="/" to="/dashboard" /> */}
            </Switch>
            <Box pt={4}>
            <Copyright companyLink="https://github.com/virgolee2209/ubs-dealer-portal/" 
          companyName="Duy Ha Le"
          copyrightYear ={new Date().getFullYear()} />
            </Box>
          </Container>
        </main>
      </div>
    );
  }
export default Home;