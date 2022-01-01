import { getPrimaryCMYK } from "../../..";

describe("getPrimaryCMYK()", () => {
	test("Getting the primary CMYK color of a language given its locale", () => {
		expect(getPrimaryCMYK("nl-nl")).toStrictEqual([0, 69, 100, 0]);
	});

	test("Getting the primary CMYK color of a language given its ISO codes", () => {
		expect(getPrimaryCMYK("pt")).toStrictEqual([0, 100, 100, 0]);
		expect(getPrimaryCMYK("nld")).toStrictEqual([0, 69, 100, 0]);
		expect(getPrimaryCMYK("afb")).toStrictEqual([0, 91, 80, 5]);
	});

	test("Getting the primary CMYK color of a language given its name", () => {
		expect(getPrimaryCMYK("english")).toStrictEqual([90, 49, 0, 62]);
	});
});
