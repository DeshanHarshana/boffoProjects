// src/Formatter.test.ts
import { Formatter } from './Formatter';

describe('Formatter', () => {
  describe('formatNameToHex', () => {
    it('should convert a string to its hexadecimal representation', () => {
      const input = 'ABC';
      const expectedOutput = '414243'; // Hexadecimal representation of 'A', 'B', 'C'

      const result = Formatter.formatNametoHex(input);

      expect(result).toBe(expectedOutput);
    });
  });
});
