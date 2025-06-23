const sum = (numString) => {
	if (!numString) return 0

	const numStringArr = numString.split(',')
	const numArr = numStringArr.map(Number)

	return numArr.reduce((total, curr) => (total += curr), 0)
}

module.exports = { sum }
