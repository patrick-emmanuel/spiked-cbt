import React from 'react';
import { storiesOf } from '@storybook/react';
import Input, { InputProps } from '../../../components/Input';


const inputProps: InputProps = {
  classes: "",
  id: "",
  controlHandler: {
    value: "",
    onChange: (e) => undefined
  },
  name: "default",
  type: "text"
};

storiesOf('components / Input', module)
  .add('default', () => <Input {...inputProps} />);
