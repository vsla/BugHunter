import React from 'react';
import MaskedInput from 'react-text-mask';

const CepFormatted = (props) => {

  return (
    <MaskedInput
      mask={[
        /[0-9]/, /\d/,
        '.',
        /\d/, /\d/, /\d/,
        '-',
        /\d/, /\d/, /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask={false}
    />
  );
};

export default CepFormatted;
