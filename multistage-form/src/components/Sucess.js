import React, { Component } from 'react';
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

export class Sucess extends Component {
    render() {
         return (
            <div>
                <MuiThemeProvider>
                <React.Fragment>
                <AppBar position="static">
                            <Toolbar variant="dense">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" color="inherit" >
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Confirm User Details
                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br/>
                <h1>Thank You for the Submission</h1>
                <h1>You will get an email for furthur Instructions</h1>
                </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Sucess;