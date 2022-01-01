import { getCMYKFlagColors } from "../../..";

describe("getCMYKFlagColors()", () => {
	test("Getting the CMYK flag colors of a language given its locale", () => {
		expect(getCMYKFlagColors("nl-nl")).toStrictEqual([
			[0, 100, 80, 5],
			[0, 0, 0, 0],
			[100, 76, 0, 9]
		]);
	});

	test("Getting the CMYK flag colors of a language given its ISO codes", () => {
		expect(getCMYKFlagColors("pt")).toStrictEqual([
			[85, 3, 91, 44],
			[0, 95, 100, 0],
			[0, 3, 97, 0],
			[100, 79, 0, 37],
			[0, 0, 0, 0],
			[0, 0, 0, 100]
		]);
		expect(getCMYKFlagColors("nld")).toStrictEqual([
			[0, 100, 80, 5],
			[0, 0, 0, 0],
			[100, 76, 0, 9]
		]);
		expect(getCMYKFlagColors("afb")).toStrictEqual([
			[0, 95, 100, 0],
			[0, 0, 0, 0]
		]);
	});

	test("Getting the CMYK flag colors of a language given its name", () => {
		expect(getCMYKFlagColors("english")).toStrictEqual([
			[0, 100, 66, 13],
			[0, 0, 0, 0],
			[100, 68, 0, 54]
		]);
	});
});
