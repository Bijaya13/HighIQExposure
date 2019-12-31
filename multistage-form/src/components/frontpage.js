import React, { Component } from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {link} from 'react-router-dom';

export default class frontpage extends Component {
    render() {
        return (
            <div>
                 <ThemeProvider>
                    <React.Fragment>
                        <AppBar position="static">
                            <Toolbar variant="dense">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" color="inherit" style={styles.appbartext}>
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Enter User Details
                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br />
                        <link to="/signin">
                            <button
                             variant="contained"
                             color="white"
                             style={styles.button}
                            > Signup </button>
                        </link>
                        <br/>
                        <br/>
                        <link to="/signup">
                            <button
                             variant="contained"
                             color="white"
                             style={styles.button}
                            > Signup </button>
                        </link>
                </React.Fragment>
                </ThemeProvider>
            </div>
        )
    }
}
