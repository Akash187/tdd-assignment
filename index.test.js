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
})
