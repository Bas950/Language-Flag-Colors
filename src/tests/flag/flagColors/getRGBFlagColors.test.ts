import { getRGBFlagColors } from "../../..";

describe("getRGBFlagColors()", () => {
	test("Getting the RGB flag colors of a language given its locale", () => {
		expect(getRGBFlagColors("nl-nl")).toStrictEqual([
			[200, 16, 46],
			[255, 255, 255],
			[0, 61, 165]
		]);
	});

	test("Getting the RGB flag colors of a language given its ISO codes", () => {
		expect(getRGBFlagColors("pt")).toStrictEqual([
			[4, 106, 56],
			[218, 41, 28],
			[255, 233, 0],
			[0, 45, 114],
			[255, 255, 255],
			[0, 0, 0]
		]);
		expect(getRGBFlagColors("nld")).toStrictEqual([
			[200, 16, 46],
			[255, 255, 255],
			[0, 61, 165]
		]);
		expect(getRGBFlagColors("afb")).toStrictEqual([
			[206, 17, 38],
			[255, 255, 255]
		]);
	});

	test("Getting the RGB flag colors of a language given its name", () => {
		expect(getRGBFlagColors("english")).toStrictEqual([
			[179, 25, 66],
			[255, 255, 255],
			[10, 49, 97]
		]);
	});
});
