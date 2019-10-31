/* eslint-disable no-useless-escape */
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
const phonRegex = /^\([1-9]{2}\) [9]{1}[0-9]{4}\-[0-9]{4}$/;
const cardRegex = /^\d{4}\.\d{4}\.\d{4}\.\d{4}$/;
const cepRegex = /^\d{2}\.\d{3}\-\d{3}$/;
const nameRegex = /^[a-zA-Z ]+(([',. - ][a-zA-Z ])?[a-zA-Z ]*)*$/;

// Capital and lower letter, number
const passwordRegex = /^(?=^.{0,}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z]))((?=(.*\d){1,})|(?=(.*\W){1,}))^.*$/;
export {
  cpfRegex, phonRegex, cardRegex, cepRegex, nameRegex, cnpjRegex, passwordRegex,
};
