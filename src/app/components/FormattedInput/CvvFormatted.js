import React from 'react';
import MaskedInput from 'react-text-mask';

const CepFormatted = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      mask={[
        /[0-9]/, /\d/, /\d/,
      ]}
      placeholderChar={'\u2000'}      
      showMask={false}
    />
  );
};

export default CepFormatted
