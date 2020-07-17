import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm'
import Success from './Success';
import axios from '../axios-submit'

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        }
    }

    //Proceed to the next step
    nextStep = () => {
        const { step } = this.state //destructuring
        this.setState({
            step: step + 1
        })
    }

    //Go back to prev step
    prevStep = () => {
        const { step } = this.state //destructuring
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => event => {
        this.setState({[input]: event.target.value})
    }

    axiosSubmit = () => { //backend submission to firebase
        //https://console.firebase.google.com/u/0/project/react-login-submission/database/react-login-submission/data
        const submit = {
            // firstName: this.state.firstName,
            // lastName: this.state.lastName,
            // email: this.state.email,
            // occupation: this.state.occupation,
            // city: this.state.city,
            // bio: this.state.bio
            ...this.state
        }
        axios.post('/submissions.json', submit)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render () {
        const { step } = this.state
        const { firstName, lastName, email, occupation, city, bio } = this.state
        const values = { firstName, lastName, email, occupation, city, bio }
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        onSubmit={this.axiosSubmit}
                    />
                )
            case 4:
                return <Success />
        }
    }
}

export default UserForm