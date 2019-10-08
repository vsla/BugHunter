import React from 'react';
import MaskedInput from 'react-text-mask';

const CardFormatted = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      mask={[
        /[2-6]/, /\d/, /\d/, /\d/, 
        '.', 
        /\d/, /\d/, /\d/, /\d/,
        '.',
        /\d/, /\d/, /\d/, /\d/,
        '.',
        /\d/, /\d/, /\d/, /\d/,
      ]}
      placeholderChar={'\u2000'}      
      showMask={false}
    />
  );
};

export default CardFormatted
