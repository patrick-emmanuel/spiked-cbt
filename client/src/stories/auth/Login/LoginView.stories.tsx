import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginView, { LoginViewProps } from '../../../auth/Login/LoginView';
import { ApolloError } from 'apollo-client';

const loginProps: LoginViewProps = {
  loading: false,
  error: undefined,
  login: (): any => undefined
};

storiesOf('auth / Login / LoginForm', module)
  .add('default', () => <LoginView {...loginProps} />)
  .add('on loading', () => <LoginView {...loginProps} loading />)
  .add('on error', () => (
    <LoginView
      {...loginProps}
      error={new ApolloError({ errorMessage: 'Invalid credentials' })}
    />
  ));
