import palette from './palette';

export default {
  fontFamily: [
    'Roboto',
    'Helvetica',
    'Arial',
    'Poppins',
    'sans-serif',
  ].join(','),

  h1: {
    color: palette.text.primary,
    fontWeight: '500',
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px',
  },
  h2: {
    color: palette.text.primary,
    fontWeight: '500',
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px',
  },
  h3: {
    color: palette.text.primary,
    fontWeight: '500',
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px',
  },
  h4: {
    color: palette.text.primary,
    fontWeight: '500',
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
  },
  h5: {
    color: '#47525E',
    fontWeight: '500',
    fontSize: '1.5rem',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  h6: {
    color: palette.text.primary,
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
  },
  subtitle2: {
    color: '#f44336',
    minHeight: '11px',
    fontSize: '12px',
    letterSpacing: '-0.05px',
    lineHeight: '10px',
    textTransform: 'initial',
    paddingTop: 5,
    paddingBottom: 5,
  },
  body1: {
    color: '#47525E',
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
    textTransform: 'initial',
  },
  body2: {
    color: palette.text.primary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '14px',
    
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px',
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '0.3px',
    lineHeight: '16px',
  }
};
