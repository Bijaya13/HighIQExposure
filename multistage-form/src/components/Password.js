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


export class Password extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const { values, handleChange } = this.props;

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
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Enter Password
                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br />
                        <EmailIcon
                        color="primary"
                        style={{ fontSize: 35, padding: 15 }}

                        />
                        <TextField
                            id="standard-basic"
                            placeholder="Enter Your Password"
                            label="Password"
                            onChange={handleChange('password')}
                            defaultValue={values.password}
                            //variant="filled"
                            color="primary"
                        />
                        <br />
                        <EmailIcon
                        color="primary"
                        style={{ fontSize: 35, padding: 15 }}

                        />
                        <TextField
                            id="standard-basic"
                            placeholder="Confirm Your Password"
                            label="Confirm Password"
                            onChange={handleChange('confirm_password')}
                            defaultValue={values.confirm_password}
                            //variant="filled"
                            color="primary"
                        />
                        <br />
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
                        </ThemeProvider>  
            </div>
        )
    } 

}

const styles = {
    button: {
        margin: 15
    },
    appbartext: {
        align: "centre",
        border: 3
    },
    largeIcon: {
        fontSize: "Large",
        padding: 24
      },
}


export default Password;