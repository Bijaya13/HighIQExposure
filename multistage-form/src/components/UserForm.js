import React, { Component } from 'react';
import FormUserDetail from './FormUserDetail';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';
import Sucess from './Sucess';
import Password from './Password';

export class UserForm extends Component {
    state = {
        step: 1,
        firstname: "",
        lastname: "",
        email: "",
        occupation: "",
        city: "",
        bio: "",
        password: "",
        confirm_password: ""
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
        // console.log(this.state.firstname);
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });

    }

    handleChange = (input) => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {

        const { step } = this.state;
        const { firstname, lastname, email, occupation, city, bio, password, confirm_password } = this.state;
        const values = { firstname, lastname, email, occupation, city, bio, password, confirm_password };

        switch (step) {
            case 1:
                return (
                    <FormUserDetail
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 2:
                return (
                    <FormPersonalDetail
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 3:
                return (
                    <Password
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )


            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )

            case 5:
                return (
                    <Sucess />
                )


        }
    }
}

export default UserForm;