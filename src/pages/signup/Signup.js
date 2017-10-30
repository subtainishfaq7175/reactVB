import React, { Component } from 'react';
import {
    TextField,
    Paper,
    Button,
    CardActions,
    Snackbar,
} from 'react-md';

export default class Signup extends Component {
    state = { toasts: [] };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            companyName: '',
            city: '',
            country: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        console.log(e);
        this.setState({
            'name' : e
        });
        console.log(this.state);

    };

    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if (!this.state.toasts.length) {
            const toasts = this.state.toasts.slice();
            toasts.push({
                text: 'Submitted new application',
                action: 'Neat!',
            });
            this.setState({ toasts });
            console.log(this.state);
        }
    };

    handleDismiss = () => {
        const [, ...toasts] = this.state.toasts;
        this.setState({ toasts });
    };
    render() {
        const { toasts } = this.state;
        return (
            <div>
                <div className="papers__container">
                    <Paper zDepth={3} className="papers__example">
                        <form className="text-fields__application" onSubmit={this.handleSubmit}>

                            <div className="md-grid">
                                <TextField
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    id="full-name"
                                    name="name"
                                    placeholder="Name"
                                    className="md-cell md-cell--bottom"
                                    required
                                    errorText="Please enter your name." />

                                <TextField
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="md-cell md-cell--bottom"
                                    required
                                    type="email"
                                    errorText="Please enter your email." />

                                <TextField
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    className="md-cell md-cell--bottom"
                                    required
                                    errorText="Please enter your password." />
                            </div>

                            <div className="md-grid">
                                <TextField
                                    value={this.state.companyName}
                                    onChange={this.handleChange}
                                    id="company-name"
                                    name="companyName"
                                    placeholder="Company Name"
                                    className="md-cell md-cell--bottom"
                                    required
                                    errorText="Please enter your company name." />

                                <TextField
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    className="md-cell md-cell--bottom"
                                    required
                                    errorText="Please enter your city." />

                                <TextField
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                    id="country"
                                    name="country"
                                    placeholder="Country"
                                    className="md-cell md-cell--bottom"
                                    required
                                    errorText="Please enter your country." />
                            </div>

                            <CardActions className="md-cell md-cell--12">
                                <Button raised primary type="submit" className="md-cell--right">Signup</Button>
                            </CardActions>

                            <Snackbar id="md-cell--right application-toasts" toasts={toasts} onDismiss={this.handleDismiss} />
                        </form>

                    </Paper>
                </div>
            </div>
        );
    }
}