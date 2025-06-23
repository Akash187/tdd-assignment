const { sum } = require('./index')

describe('Test sum function', () => {
	test('should function exist', () => {
		expect(typeof sum).toBe('function')
	})

	test('Empty string', () => {
		expect(sum('')).toBe(0)
	})

	test('Single number string', () => {
		expect(sum('1')).toBe(1)
	})

	test('Two number string', () => {
		expect(sum('1,2')).toBe(3)
	})

	test('Unknown number string', () => {
		expect(sum('1,2,3,4,5')).toBe(15)
	})

	test('Handle newline between numbers', () => {
		expect(sum('1,2/n3,4')).toBe(10)
	})

	test('Custom delimiter Example 1', () => {
		expect(sum('//;\n1;2')).toBe(3)
	})

	test('Custom delimiter Example 2', () => {
		expect(sum('//#\n8#10')).toBe(18)
	})

	test('Custom delimiter Example 3', () => {
		expect(sum('//$\n1$2$3')).toBe(6)
	})

	test('Negative numbers example 1', () => {
		expect(() => sum('-1,2')).toThrow('negatives not allowed')
	})

	test('Negative numbers example 2', () => {
		expect(() => sum('1,-2,-3')).toThrow('negatives not allowed')
	})

	test('Numbers bigger than 1000 Example 1', () => {
		expect(sum('1,2,1001')).toBe(3)
	})

	test('Numbers bigger than 1000 Example 2', () => {
		expect(sum('1000,1001,2')).toBe(1002)
	})

	test('Numbers bigger than 1000 Example 3', () => {
		expect(sum('1000\n2000,3')).toBe(1003)
	})

	test('Delimiters can be of any length', () => {
		expect(sum('//[***]\n1***2***3')).toBe(6)
	})
})
