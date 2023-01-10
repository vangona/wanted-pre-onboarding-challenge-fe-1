import checkIsValidPassword from '../utils/checkIsValidPassword';

const validPasswordCase = ['12345678', 'asdbasdb'];
const invalidPasswordCase = ['1234567', 'asdbasd'];

test.each(validPasswordCase)('유효한 이메일', (password: string) => {
  expect(checkIsValidPassword(password)).toBe(true);
});

test.each(invalidPasswordCase)('유효하지 않은 이메일', (password: string) => {
  expect(checkIsValidPassword(password)).toBe(false);
});
