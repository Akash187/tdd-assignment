const { sum } = require('./index')

test('sum function should exist', () => {
	expect(typeof sum).toBe('function')
})
