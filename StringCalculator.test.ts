import { add } from "./src/utils/StringCalculator";
describe('String Calculator', () => {

    // Test case 1: Empty string should return 0
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    // Test case 2: Single number should return the number itself
    it('should return the number itself when given a single number', () => {
        expect(add('1')).toBe(1);
    });

    // Test case 3: Two numbers should return the sum
    it('should return the sum of two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    // Test case 4: Multiple numbers should return the sum
    it('should return the sum of multiple numbers', () => {
        expect(add('1,2,3')).toBe(6);
    });

    // Test case 5: New line between numbers should be supported
    it('should handle new lines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    // Test case 6: Support custom delimiter
    it('should support custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    // Test case 7: Ignore non-numeric characters in input
    it('should ignore non-numeric characters in input', () => {
        expect(add('//;\n1;2;abc;3')).toBe(6);
    });

    // Test case 8: Return 0 for empty numbers after delimiter
    it('should return 0 for empty numbers after the delimiter', () => {
        expect(add('//;\n')).toBe(0);
    });

    // Test case 9: Input with spaces between numbers should still work
    it('should ignore spaces between numbers', () => {
        expect(add('1 , 2 ,3')).toBe(6);
    });

    // Test case 10: Handle large numbers
    it('should handle large numbers correctly', () => {
        expect(add('1000,10000,100000')).toBe(111000);
    });

    // Test case 11: Handle single large number
    it('should return the single large number correctly', () => {
        expect(add('100000')).toBe(100000);
    });

    // Test case 12: Handle mixed delimiters (comma and new line)
    it('should handle mixed delimiters (comma and new line)', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    // Test case 13: Custom delimiter with multiple characters
    it('should support custom delimiters with multiple characters', () => {
        expect(add('//[***]\n1***2***3')).toBe(6);
    });


    // Test case 14: Custom delimiter can be any character
    it('should support custom delimiters (e.g., |)', () => {
        expect(add('//|\n1|2|3')).toBe(6);
    });

    // Test case 15: Negative numbers should throw an exception
    it('should throw an exception for negative numbers', () => {
        expect(() => add('1,-2')).toThrowError('Negative numbers not allowed: -2');
    });

    // Test case 14: Multiple negative numbers should throw an exception with all negative numbers in the message
    it('should throw an exception for multiple negative numbers', () => {
        expect(() => add('1,-2,-3')).toThrowError('Negative numbers not allowed: -2,-3');
    });

    // Test case 17: Numbers with leading/trailing spaces should work
    it('should handle numbers with leading/trailing spaces', () => {
        expect(add('  1, 2 ,  3 ')).toBe(6);
    });
});
