import languages from "..";

describe("Languages array", () => {
	test("Expect languages to be an array with length", () => {
		expect(languages).toBeInstanceOf(Array);
		expect(languages[0]).toBeInstanceOf(Object);
		expect(languages.length).toBeTruthy();
	});
});
