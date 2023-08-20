import { useRef } from 'react';
import { View } from './View';

const Button = ({ ...props }) => {
  const divRef = useRef();
  return <View {...props} ref={divRef} />;
};

export default Button;
