const checkIsValidEmail = (email: string) => {
  const validEmail = /.+@.+\..+/g;
  return validEmail.test(email);
};

export default checkIsValidEmail;
