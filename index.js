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

	return numArr.reduce((total, curr) => (total += curr), 0)
}

module.exports = { sum }
