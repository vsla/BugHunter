import {
  SIGN_IN_ADMIN,
  SIGN_OUT_ADMIN,
  SIGN_IN_COMPANY,
  SIGN_OUT_COMPANY,
  SIGN_IN_BUGHUNTER,
  SIGN_OUT_BUGHUNTER,
} from './authTypes';

function SignInAdmin(item) {
  return {
    type: SIGN_IN_ADMIN,
    payload: item,
  };
}
function SignInBugHunter(item) {
  return {
    type: SIGN_IN_BUGHUNTER,
    payload: item,
  };
}
function SignInCompany(item) {
  return {
    type: SIGN_IN_COMPANY,
    payload: item,
  };
}
function SignOutAdmin(item) {
  return {
    type: SIGN_OUT_ADMIN,
    payload: item,
  };
}
function SignOutBugHunter(item) {
  return {
    type: SIGN_OUT_BUGHUNTER,
    payload: item,
  };
}
function SignOutCompany(item) {
  return {
    type: SIGN_OUT_COMPANY,
    payload: item,
  };
}


export {
  SignInAdmin,
  SignInBugHunter,
  SignInCompany,
  SignOutAdmin,
  SignOutBugHunter,
  SignOutCompany,
};
