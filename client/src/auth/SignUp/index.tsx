import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/context';
import SignUpView from './SignUpView';

const SignUp = () => {
  const value = useContext(AuthContext);
  const { signUp, signUpLoading, signUpError } = value;
  return (
    <SignUpView signUp={signUp} loading={signUpLoading} error={signUpError} />
  );
};

export default SignUp;
