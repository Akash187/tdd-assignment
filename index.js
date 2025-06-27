const sum = (numString) => {
	if (!numString) return 0
	const numArray = extractNums(numString)
	checkIsNegativeValue(numArray)
	const filteredNums = removeNumGreaterThan1000(numArray)
	return calculateTotal(filteredNums)
}

function removeNumGreaterThan1000(numArr) {
	return numArr.filter((num) => num <= 1000)
}

function calculateTotal(numArray) {
	return numArray.reduce((total, curr) => total + curr, 0)
}

function extractNums(numString) {
	const numArray = []
	let curr = ''
	const regex = /[0-9-]/
	for (let i = 0; i < numString.length; i++) {
		if (regex.test(numString[i])) {
			curr += numString[i]
		} else {
			if (Number(curr)) {
				numArray.push(Number(curr))
			}
			curr = ''
		}
	}
	if (Number(curr)) {
		numArray.push(Number(curr))
	}

	return numArray
}

function checkIsNegativeValue(numArr) {
	const negativeNumbers = numArr.filter((num) => num < 0)
	if (negativeNumbers.length > 0) {
		throw new Error(`negatives not allowed: ${negativeNumbers.join(', ')}`)
	}
}

module.exports = { sum }
