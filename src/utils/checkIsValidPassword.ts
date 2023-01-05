const checkIsValidPassword = (password: string) => {
  const validPassword = /.{8,}/g;
  return validPassword.test(password);
};

export default checkIsValidPassword;
