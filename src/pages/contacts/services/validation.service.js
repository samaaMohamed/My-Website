export const isEmailValid = (email) => {
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return EMAIL_REGEX.test(email);
};

export const isValidText = (text) => {
  const SPECIAL_CHARS = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  return !SPECIAL_CHARS.test(text);
};

export const isContainingNumbers = text => {
    const CHARS = /[0-9]/;

    return CHARS.test(text);
}

export const isPhoneValid = phone => {
    const PHONE = /^0[0-9]{10}$|^0[0-9]{13}$/;
    return PHONE.test(phone);
}

/**
 * 00201034561344 / 01034561344 
 */
