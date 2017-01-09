import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(input) {
    this.props.passwordChanged(input);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={this.props.emailValue}
            placeholder='email@gmail.com'
            onChangeText={email => this.onEmailChange(email)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={password => this.onPasswordChange(password)}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emailValue: state.auth.emailValue
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
