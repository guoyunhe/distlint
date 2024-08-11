import { distlint } from '.';

describe('distlint', () => {
  describe('normal', async () => {
    expect(distlint('Foo', 'Bar')).toBe('Foo Bar');
  });

  describe('lastName upper case', async () => {
    expect(distlint('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
