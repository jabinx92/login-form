import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Sucess extends Component {
    constructor(props) {
        super(props)
    }

    continue = event => {
        event.preventDefault();
        //PROCESS FORM
        this.props.nextStep()
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep()
    }

    render() {
        
        return (
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank you for your submission</h1>
                    <p>You will get an email with further instructions!</p>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Sucess;