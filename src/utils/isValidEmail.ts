const isValidEmail = (email: string) => {
  const validEmail = /.+@.+\..+/g;
  return validEmail.test(email);
};

export default isValidEmail;
