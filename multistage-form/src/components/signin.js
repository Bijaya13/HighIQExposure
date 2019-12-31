import React, { Component } from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';


export default class signin extends Component {

    state={
        username:"",
        password:""
    }

    handleChange = (input) => e => {
        this.setState({ [input]: e.target.value });
    }

    onsubmit=()=>
    {
        const Signup={
            username: this.state.username,
            password: this.state.password
        }

        console.log(Signup);
        
    }

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
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                    &emsp;&emsp;&emsp;&emsp;&emsp; Enter User Details
                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br />
                        <ContactsIcon
                            color="primary"
                            style={{ fontSize: 35, padding: 15 }}

                        />
                        <TextField
                            id="standard-basic"
                            placeholder="Enter Your UserName"
                            label="Username"
                            onChange={handleChange('username')}
                            defaultValue={values.username}
                            //variant="filled"
                            color="primary"
                        />
                        <br />
                        <br />
                        <EmailIcon
                            color="primary"
                            style={{ fontSize: 35, padding: 15 }}

                        />
                        <TextField
                            id="standard-basic"
                            placeholder="Enter Your Password"
                            label="Email"
                            onChange={handleChange('password')}
                            defaultValue={values.password}
                            //variant="filled"
                            color="primary"
                        />
                        <br />
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            onClick={this.onsubmit}
                        >
                            Submit
                </Button>
                    </React.Fragment>
                </ThemeProvider>
            </div>
        )
    }
}
