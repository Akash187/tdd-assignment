const sum = (numString) => {
	if (!numString) return 0

	const numArr = []

	// parse full string and find all the numbers including negative numbers
	let curr = ''
	const regex = /[0-9-]/
	for (let i = 0; i < numString.length; i++) {
		if (regex.test(numString[i])) {
			curr += numString[i]
		} else {
			if (Number(curr)) {
				numArr.push(Number(curr))
			}
			curr = ''
		}
	}
	if (Number(curr)) {
		numArr.push(Number(curr))
	}

	// Handle negative numbers
	const negativeNumbers = numArr.filter((num) => num < 0)
	if (negativeNumbers.length > 0) {
		throw new Error(`negatives not allowed: ${negativeNumbers.join(', ')}`)
	}

	return numArr.reduce((total, curr) => {
		// skip curr which is bigger than 1000
		if (curr > 1000) return total
		total += curr
		return total
	}, 0)
}

module.exports = { sum }
