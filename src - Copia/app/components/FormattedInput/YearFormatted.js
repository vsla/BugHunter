import React from 'react';
import MaskedInput from 'react-text-mask';

const YearFormatted = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      mask={[
        /[0-9]/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      showMask={false}
    />
  );
};

export default YearFormatted
