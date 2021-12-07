const passwordValidator = (password) => {
  if (password.length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
};

const passwordValidator2 = (password) => {
  return password.length > 7 ? "Strong" : "Weak";
};

const passwordValidator3 = (password) => {
  return (password.length > 7 && "Strong") || "Weak";
};

const passwordValidator4 = (password) => {
  return password.length > 7 && /[A-Z]/.test(password)
    ? "Very Strong"
    : password.length > 7
    ? "Strong"
    : "Weak";
  // if (password.length > 7 && /[A-Z]/.test(password)) {
  //   return "Very Strong";
  // } else if (password.length > 7) {
  //   return "Strong";
  // } else {
  //   return "Weak";
  // }
};
console.log(passwordValidator3("adfth"));

// const state = {
//   isOpen: true,
// };

// console.log(state.isOpen && "show modal in UI");
