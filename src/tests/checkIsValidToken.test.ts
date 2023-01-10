import checkIsValidToken from '../utils/checkIsValidToken';

const validTokenCase = ['a'];
const invalidTokenCase = [''];

test.each(validTokenCase)('유효한 이메일', (token: string) => {
  expect(checkIsValidToken(token)).toBe(true);
});

test.each(invalidTokenCase)('유효하지 않은 이메일', (token: string) => {
  expect(checkIsValidToken(token)).toBe(false);
});
