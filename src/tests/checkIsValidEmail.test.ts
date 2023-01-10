import checkIsValidEmail from '../utils/checkIsValidEmail';

const validEmailCase = ['rlarhksrud14@gmail.com', '123@123.123'];
const invalidEmailCase = ['123', '123@', '123.', '123.@123', '123@.123'];

test.each(validEmailCase)('유효한 이메일', (email: string) => {
  expect(checkIsValidEmail(email)).toBe(true);
});

test.each(invalidEmailCase)('유효하지 않은 이메일', (email: string) => {
  expect(checkIsValidEmail(email)).toBe(false);
});
