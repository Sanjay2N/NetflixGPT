const validateInputs = (email, password, name, phoneNumber) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
    email
  );
  if (phoneNumber) {
    const isPhoneNumberValid =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        phoneNumber
      );
    if (!isPhoneNumberValid) return "Phone Number not valid";
  }
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
  console.log(password);
  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";
  return null;
};

export default validateInputs;
