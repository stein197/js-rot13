const rot13 = require(".");
const assert = require("node:assert");

const result = {
	fail: 0,
	pass: 0
};
for (const [desc, cb] of Object.entries({
	"Should return empty string when an empty string is passed": () => assert.equal(rot13(""), ""),
	"Should correctly encode A-Z characters": () => assert.equal(rot13("Hello"), "Uryyb"),
	"Should not encode other characters than A-Z": () => assert.equal(rot13(" :;,."), " :;,."),
	"Should return the initial string when the function is applied twice": () => assert.equal(rot13(rot13("Hello, World")), "Hello, World"),
	"Should return correct result for the entire alphabet": () => assert.equal(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"), "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm")
})) {
	try {
		cb();
		result.pass++;
		console.log(`[PASS]: ${desc}`);
	} catch {
		result.fail++;
		console.log(`[FAIL]: ${desc}`);
	}
}
console.log(`Failed: ${result.fail}, Passed: ${result.pass}`);