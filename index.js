const CODE_POINT_A_LOWER = 97;
const CODE_POINT_Z_LOWER = 122;
const CODE_POINT_A_UPPER = 65;
const CODE_POINT_Z_UPPER = 90;
const SHIFT_VALUE = 13;

/**
 * Does ROT13 cipher algorithm to the provided string. Only A-Z letters are encoded, other symbols remain as is.
 * @param {string} data String to encrypt.
 * @returns {string} Encoded string.
 * @example
 * ```js
 * rot13("Hello, World!"); // "Uryyb, Jbeyq!"
 * ```
 */
module.exports = function rot13(data) {
	let result = "";
	for (const char of data)
		result += String.fromCodePoint(shift(char.codePointAt(0)));
	return result;
}

function shift(codePoint) {
	let min, max;
	if (CODE_POINT_A_LOWER <= codePoint && codePoint <= CODE_POINT_Z_LOWER) {
		min = CODE_POINT_A_LOWER;
		max = CODE_POINT_Z_LOWER;
	} else if (CODE_POINT_A_UPPER <= codePoint && codePoint <= CODE_POINT_Z_UPPER) {
		min = CODE_POINT_A_UPPER;
		max = CODE_POINT_Z_UPPER;
	} else {
		return codePoint;
	}
	codePoint += SHIFT_VALUE;
	if (codePoint > max)
		codePoint = min + codePoint - max - 1;
	return codePoint;
}