function isEmpty(str, errorSetter) {
  if (!str || str.length === 0) {
    errorSetter("This field must be completed");
    return true;
  }
  return false;
}

export function validateCompleted(
  stateArray,
  errorSetterArray,
  completedErrorSetter
) {
  var b = true;
  completedErrorSetter("");

  for (var i = 0; i < stateArray.length; i++) {
    var state = stateArray[i];
    if (isEmpty(state, errorSetterArray[i])) {
      b = false;
    }
  }

  if (b === false) {
    completedErrorSetter("Fields marked with * must be completed");
  }
  return b;
}

export function validateTele(teleState, teleErrorSetter) {
  var b = true;
  teleErrorSetter("");

  if (isEmpty(teleState, teleErrorSetter)) {
    return false;
  }

  const tele = teleState.replace(/[^0-9]+/g, "");
  if (tele.length !== 10) {
    b = false;
    teleErrorSetter("Please enter a valid phone number");
  }
  return b;
}

export function validateLuhn(cardState, cardErrorSetter) {
  var b = true;
  cardErrorSetter("");

  if (isEmpty(cardState, cardErrorSetter)) {
    return false;
  }

  // remove all non digit characters
  var value = cardState.replace(/\D/g, "");
  if (value.length < 13) {
    cardErrorSetter("Please fully enter your card number");
    return false;
  }
  var sum = 0;
  var shouldDouble = false;
  // loop through values starting at the rightmost side
  for (var i = value.length - 1; i >= 0; i--) {
    var digit = parseInt(value.charAt(i));

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }
  b = sum % 10 === 0;
  if (b === false) {
    cardErrorSetter("Please enter a valid card number");
  }
  return b;
}

export function validateEmail(emailState, emailErrorSetter) {
  var b = true;
  emailErrorSetter("");
  if (isEmpty(emailState, emailErrorSetter)) {
    return false;
  }
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!re.test(emailState)) {
    b = false;
    emailErrorSetter("Please fully enter your card number");
  }
  return b;
}

//export function validateDate(dateState, dateErrorSetter) {}
