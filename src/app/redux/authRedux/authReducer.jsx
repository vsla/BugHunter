import {
  SIGN_IN_ADMIN,
  SIGN_OUT_ADMIN,
  SIGN_IN_COMPANY,
  SIGN_OUT_COMPANY,
  SIGN_IN_BUGHUNTER,
  SIGN_OUT_BUGHUNTER,
} from './authTypes';

const initialState = {
  token: '',
  email: '',
  name: '',
  cpf: '',
  logged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_BUGHUNTER:
      return (
        {
          type: 'bughunter',
          token: action.payload.authentication_token,
          id: action.payload.id,
          email: action.payload.email,
          name: action.payload.username,
          logged: true,
        }
      );
    case SIGN_OUT_BUGHUNTER:
      return (
        {
          type: '',
          token: '',
          email: '',
          id: '',
          name: '',
          logged: false,
        }
      );
    case SIGN_IN_ADMIN:
      return (
        {
          type: 'admin',
          id: action.payload.id,
          token: action.payload.authentication_token,
          email: action.payload.email,
          name: action.payload.username,
          logged: true,
        }
      );
    case SIGN_OUT_ADMIN:
      return (
        {
          type: '',
          token: '',
          email: '',
          id: '',
          name: '',
          logged: false,
        }
      );
    case SIGN_IN_COMPANY:
      return (
        {
          type: 'company',
          token: action.payload.authentication_token,
          id: action.payload.id,
          email: action.payload.email,
          name: '',
          logged: true,
        }
      );
    case SIGN_OUT_COMPANY:
      return (
        {
          type: '',
          token: '',
          id: '',
          email: '',
          name: '',
          cpf: '',
          phone: '',
          logged: false,
        }
      );
    default:
      return state;
  }
};
