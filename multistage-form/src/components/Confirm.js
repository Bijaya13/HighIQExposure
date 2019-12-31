import React, { Component } from 'react';
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Listitem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {

        const { values: { firstname, lastname, email, occupation, city, bio ,password,confrim_password} } = this.props;

        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar position="static">
                            <Toolbar variant="dense">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" color="inherit">
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Confirm User Details
                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br />
                        <List>
                            <Listitem >
                                First Name:: {firstname}
                            </Listitem>
                            <Listitem>
                                Last Name:: {lastname}
                            </Listitem>
                            <Listitem>
                                Email:: {email}
                            </Listitem>
                            <Listitem>
                                Occupation::{occupation}
                            </Listitem>
                            <Listitem>
                                City:{city}
                            </Listitem>
                            <Listitem>
                                Bio::{bio}
                            </Listitem>
                            <Listitem>
                                Password::{password}
                            </Listitem>
                        </List>
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            onClick={this.continue}
                        >
                            Continue
                         </Button>
                        <Button
                            variant="contained"
                            color="white"
                            style={styles.button}
                            onClick={this.back}
                        >
                            Back
                         </Button>
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    li: {
        align: "center",
    }
}

export default Confirm;